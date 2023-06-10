// Your Next.js component file

import { useState, FormEvent } from 'react';
import { subscribeToConvertKit } from '../utils/convertKit';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await subscribeToConvertKit(email);
      setSuccess(true);
      setEmail('');
    } catch (error) {
      setError('Failed to subscribe. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='px-4 py-2 rounded-md border border-black'
        placeholder='Email address'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button className='ml-2 px-4 py-2 rounded-md bg-black text-white ' type="submit" disabled={loading}>
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
      {success && <p className=''>Successfully subscribed!</p>}
      {error && <p>{error}</p>}
    </form>
  );
}
