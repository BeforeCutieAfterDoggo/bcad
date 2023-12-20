import React from "react";
import Toggle from "../../components/layout/toggle";
import { useState } from "react";
import { useRouter } from "next/router";
export default function ProductPage() {
  const [checked, setChecked] = useState(true);
  const router = useRouter();
  const handleToggleChange = (checked: boolean) => {
    setChecked(checked);
    if (checked) {
      router.push("/project/6-1");
    } else {
      router.push("/project/6");
    }
  };
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative divide-y-2 divide-black">
        <div className="mx-auto max-w-prose text-lg  ">
          <h1>
            <span className="mt-2 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              加州的孟买海滩竟然有一个互联网黑市
            </span>
            <p className="text-center font-mono italic">
              新婚夫妇在愚人节当天组织了一个另类小集市
            </p>
          </h1>
          <div className="flex flex-col items-center justify-center mt-2">
            <Toggle
              label="中"
              checked={checked}
              onChange={handleToggleChange}
            />
          </div>
        </div>
        <div className="mx-auto mt-6 text-gray-500 bg-white relative">
          <img className="relative mx-auto" src="/drops/drop6.png"></img>
          <div className="xl:flex justify-center h-full  border-t-2 border-black">
            <div className="xl:flex justify-center">
              <div className="w-full  xl:w-1/2 ">
                <img
                  className=" w-full border-r-2 lg:border-b-2  border-black "
                  src="/drops/drop6/1.jpeg"
                ></img>
              </div>
              <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-black">
                <table className="w-full text-center">
                  <tbody className="text-black font-mono text-start">
                    <tr className=" border-b-2 border-black">
                      <td className="px-4 py-2 font-bold ">What Is It</td>
                      <td className="px-4 py-2 italic">
                        <a
                          className="underline decoration-solid"
                          href="http://yami-ichi.biz/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          互联网黑市
                        </a>{" "}
                        in Bombay Beach
                      </td>
                    </tr>
                    <tr className="border-t-2 border-b-2 border-black">
                      <td className="px-4 py-2 font-bold ">Format</td>
                      <td className="px-4 py-2 italic ">线下活动</td>
                    </tr>
                    <tr className="border-t-2 border-b-2 border-black">
                      <td className="px-4 py-2 font-bold ">Description</td>
                      <td className="px-4 py-2 italic ">
                        关上电脑,退出账号,进入现实世界。互联网黑市是一个让你面对面“浏览”的跳蚤市场。
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.bbyi.fyi/"
                >
                  <button className="mt-10 pb-2 text-black border border-black border-2 font-bold font-mono py-2 px-4 italic   mb-10">
                    🐟 来这里看看我们的脑洞吧!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:flex flex-col justify-center  h-full  border-black">
            <h1 className="mt-10 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              刚结完婚的我们在14天里想出了14个脑洞,还把它们都完成了
            </h1>
            <p className="px-4 mt-10 text-black font-mono italic">
              事情的起因是这样的。去年10月的时候我和Jmill(现在的老公,当时的男朋友)去迈阿密探望朋友M和F,在他们的公寓大楼里散步的时候,M说他们打算在一月份搞一个Internat
              Yami-ichi,翻译过来就是互联网黑市。
              起源于2012年的日本东京,由一个叫IDPW的互联网社团组织。一开始的起因是因为社员做的iOS
              app被苹果公司拒绝了,理由竟然是不够有用和娱乐性不足。一气之下他们决定把互联网带到现实世界,和人面对面交互,于是就有了这个活动。
              后来这个黑市遍布了世界各地,以去中心化的形式被不同的人组织。只要和创始人的人说一声你要举办就行,成功举办后他们还会把你的活动信息和照片放在官网上。
              Jmill一听到这个活动就两眼放光,一月份的黑市虽然参与不了,但很想自己在Mars
              College搞一个。
            </p>
            <p className="px-4 mt-10 text-black font-mono italic">
              今年3月18号的时候我和Jmill在Mars
              College结婚了。接着休息了一天后便开始和Mars
              College的人一起组织这个活动。
              举办这个活动的最佳时机在4月1号,也就是小有名气的Bombay Beach
              Biennale
              (双年展)的第三天,那时候会有很多游客和艺术家来这里露营,做装置艺术,做活动。
              而我们也需要在两个星期的时间里找参与者,做自己的作品,搞场地布局。
              非常感谢免费提供场地的Gene,帮忙布置场地的Nico,做了一个酷炫logo的kirby,照着酷炫logo做了一个酷炫招牌的Will,以及我会下面介绍的所有参与者。所有的作品的都可以在这个网站里看到：
              <a className="underline " href="https://www.bbyi.fyi/">
                https://www.bbyi.fyi/
              </a>
            </p>
            <p className="px-4 mt-10 text-black font-mono italic">
              首先自卖自夸的介绍一下我和Jmill一起合作的作品。
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              这个作品叫Obsidian
              Vault。就是著名的开源双链笔记管理工具。黑曜石是我在Salton
              Sea附近的一块地上捡的。当时我就觉得我可以做一个和Obsidian
              Notes相关的东西,但一直没想好要怎么呈现。
              后来突发奇想可以让大家在一张紫色的post
              it上写下自己的笔记,以此来交换一颗黑曜石。结果这个作品超受欢迎,以至于最后石头都没有了还是有人在继续写笔记。我们无奈只能就地捡砾石作为交换:P。
              我们收到了非常多有意思的笔记,不得不感叹人的脑洞之大,甚至有了第一个双链笔记（见右下图）。
            </p>
            <div className="flex">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/2.1.jpeg"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/2.2.jpeg"
              />
            </div>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              我们做的第二个作品叫EitherRocks。来源于一个叫Ether Rocks的OG
              NFT项目。 刚好我在Salton
              Sea探索海军旧址的时候冒着被手榴弹炸死的危险,捡了一堆叫Gypsum的透明火山石,Jmill就提议可以做一个和Ether
              Rocks相关的作品。
              因为所有的NFT都有traits来标明稀有度,于是我们觉得可以把Sims
              1的traits用在石头上。 我们会根据Neat, Outgoing, Active, Playful,
              和Nice这五大指标仔细感受每块石头的特质打分,并写在包装上。
              神奇的是我们对每块石头特质的评分都非常相似。还能把它们和现实中认识的人一一对应。它们简直像活物一样！
              以至于为什么我们叫这个作品EitherRocks,是因为玩家必须在石头里盲选两块石头,选好后睁开眼,并选择其中一块石头拿走。
              可能因为过于Crypto,所有来访者只有一个get到了Ether Rock的这个梗。
            </p>
            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/3.1.png"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/3.2.jpeg"
              />
            </div>

            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              下一个想要介绍的是数字游民Josh的作品。Josh是一个负责认真,交流起来极其舒适的人。但完全不使用社交软件,平时只靠email和短信交流。
              他的脑洞经常非常的到点。比如这次的互联网黑市他就做了一个免费的Facebook注册表共大家填写。里面的细节非常有梗。
            </p>
            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/4.1.jpeg"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/4.2.jpg"
              />{" "}
            </div>

            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              Vincent是一个“多功能”艺术家,他能通过touch
              designer将软件和硬件串起,经常做出一些非常惊艳的高质量作品。
              他在黑市里做了一个装置艺术叫Shadow
              Selfies,我更愿意称它为AI吐槽机器人。
              当你靠近这个面镜子后,它会自动给你拍照,然后用OpenAI的GPT-3分析你的外表,生成一段赛博霸凌你的话并用一位女性AI的声音广播出来。
            </p>
            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/5.1.png"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/5.2.png"
              />{" "}
            </div>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              左图的作者Karo是一个非常治愈的艺术家。她擅长给人”算命“,有着惊人的直觉和使人平静的能力。
              每次和她的交互都让我觉得像是泡在了暖暖的温泉里喝着薄荷味的冷饮。
              她买了两个耳机头带,并用黑曜石和棕榈树叶分别做了耳机的部分。感觉一戴上大脑就会自动平移到大自然里。
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              右图则是一个叫Marzipan的多动症生物学家做的一个AI小册子。喜欢用AI和他写的文字做Remix。
              他给AI的prompt是我见过的质量最高的prompt。能把AI最独特最有趣的一面调动起来。
              Mars College有四个部门,分别代表水,土,火,空。他在去年的Mars
              College给代表火神的Chatsubo赋予了一个非常热辣的性格。
              Chatsbo有点像是一个愤世嫉俗的老头子,说话很直接,有时候很rude,但又很有人情味。这个册子里就是Martian和这个火神的对话集。
              售价是一块大麻。有一个人用一块上等大麻的价格买下了一本对话集。
            </p>
            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/6.1.jpeg"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/6.2.jpeg"
              />
            </div>

            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              互联网黑市当然也少不了用吃的做文章。历年来有做饼干的,代表HTTP
              Cookie。有做覆盆子派的(Raspberry Pi)。
              今年也少不了鼠标箭头饼干。这个作品的作者叫Chabel,是一位来自巴西的艺术家,从VR到电影什么都会,最近在和她的伴侣Ygor用AI做非常trippy但又让人撇不开眼的动画。
              过去的她帮助了巴西当地女性性工作者在疫情期间卖肥皂自力更生,而她的作品也非常注重自然,动物,和女性这些“非主流”的角色。让我很是敬仰。
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              右边则是由Jmill出的主意,由我来执行的Instagram
              Mat。这是一个非常Meta的作品（双关语注意）。这也是我第一次和国内的厂家合作。
              收到货物的时候非常的激动。第一次看到idea到实物的诞生过程感觉非常有成就感。
            </p>

            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/7.1.jpeg"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/7.2.jpeg"
              />
            </div>

            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              最后卖的最好的是图一和图二的贴纸。第一个是由一个叫Sam的妹子想出的一个FOMO光谱。
              来Mars之前,Sam在研究如何要如何让博物馆能够承担适当的风险让展览更有趣,更有参与感。
              她发现人不仅有FOMO,还可以JOMO,那么再把光谱两端拉长,就会有FOJI和JOJI。而JOJI可能是三个选项里人可以拥有的最好的体验。
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              图二是Kirby设计的Logo。她的艺术里总是带着虹膜的色彩,trippy的几何图形。
              这次的logo是一个鱼骨头,代表着Salton
              Sea被污染后成片的死鱼骨头变成了海滩。
              而中间比较天才的一个设计是鱼眼睛的部分,是苹果的loading光标。
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              图三是我由电脑线圈这个动画里的电脑符纸作为启发,做了一个中国式的bug退散符纸。据说贴在电脑上能够减少30%的电脑bug哦（？）。
            </p>

            <div className="flex ">
              <img
                className="w-1/4 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/8.1.png"
              />
              <img
                className="w-1/4 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/8.2.png"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/8.3.png"
              />
            </div>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              还有很多脑洞因为篇幅没有介绍,大家可以去我在一开始提到的网站里看到完整的列表。
              这次组织后的感受就是Bombay
              Beach的双年展是一个很注重Giving的地方。有点类似于火人节,大家都会免费赠送彼此一些东西。
              其中最火爆的莫过于Obsidian
              Vault这个作品,互动性很强,大家也在交互的过程中感到非常的开心。
              这次的活动组织也让我意识到了原来只要去做,就会有人帮你实现。但自己一定要相信这件事会发生并去执行必要的步骤。
              而且这种低成本,低期待的活动也让很多不是艺术家的人参与进来,激发了他们的创造力。我觉得真的是太有魔力了。
              我们做了很多“无用”的东西,但我们吸引了很多和我们一样奇怪的人欣赏我们的作品。也许没有赚钱,但获得了非常多丰富心灵的交流。
              这些经历都是千金难求的。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
