import { useState } from 'react';
import { firestore, storage } from '../../lib/firebaseConfig/init';
import Loader from '../misc/loader';
import { getAuth, GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll} from "firebase/storage";
import { Item } from 'framer-motion/types/components/Reorder/Item';
import { doc, getDoc, collection, addDoc, setDoc, getDocs, query, where, limit, orderBy} from 'firebase/firestore';


// Uploads images to Firebase Storage
export default function ImageUploader(props: any) :any{
    const auth = getAuth();
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [downloadURL, setDownloadURL] = useState('');
    const uid:string = auth?.currentUser?.uid!;
    const {slug, username, defaultValues } = props;
    const [images, setImages] = useState<Array<string>>(defaultValues?.images || []);
    // const [imageNames, setImageNames] = useState<Array<string>>([]);

    console.log("slug2" +slug)

    // Creates a Firebase Upload Task
    const uploadFile = async (e:any) => {
    // Get the file
    const file = e.target.files[0];
    // const extension = file.type.split('/')[1];

    // Makes reference to the storage bucket location
    const storageRef = ref(storage, `uploads/${uid}/${slug}/${Date.now()}/${file.name}`);
    // imageNames.push(file.name)  
    const uploadImage = uploadBytesResumable(storageRef, file);
    setUploading(true);

    uploadImage.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      switch(snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;

      }
    }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
            setDownloadURL(downloadURL);
            setUploading(false);
            console.log('File available at', downloadURL);
            images.push(downloadURL);
            setDoc(doc(firestore, "users", uid, "posts", slug), {
              username,
              slug,
              images,
              // imageNames
            },
            { merge: true }
            )
        });
      }
    );

    }


    return (
        <div className="box">
        <Loader show={uploading} />
        {uploading && <h3>{progress}%</h3>}

        {!uploading && (
            <>
            <label className="btn">
                {/* 📸 Upload Img */}
                <input type="file" onChange={uploadFile} accept="image/x-png,image/gif,image/jpeg" />
            </label>
            
            </>
        )}

        {/* {downloadURL && <code className="upload-snippet">{`![alt](${downloadURL})`}</code>} */}
        {/* <img className="h-16 w-16 rounded-full" src={downloadURL} alt=""/> */}
        {/* {images.map((image)=> {
          console.log("heyoaa")
          console.log(image)
          return(
          <img className="h-16 w-16 rounded-full" src={image} alt=""/>)
        })} */}

        </div>
    );
}
