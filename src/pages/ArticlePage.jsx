import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

function ArticlePage() {
  const {username} = useParams()
  const users = [
    { 
        id: 1,
        uname: '@bocilFF',
        img: '/pic1.jpg',
        name: 'Freyjadour Falenas',
        titlePage: 'When a Word Becomes Inspiration to Move',
        subheading: 'Next Stop: Anywhere Everywhere',
        paragraph: [
            'Sometimes, a single word can spark a revolution within us. It`s not just a collection of letters but a vessel of meaning, carrying the weight of dreams, courage, and possibility. Words like "freedom," "hope," or "begin" have the power to jolt us out of complacency, urging us to take a step—any step—toward something greater. This is the story of how a word can become a compass, guiding us to destinations we never imagined, with the horizon stretching to anywhere and everywhere.',
            'Words have always shaped human history. "Liberty" fueled revolutions. "Love" built bridges across divides. "Explore" sent ships across uncharted seas. Each word, when embraced, becomes a lens through which we see the world anew. It`s not about the word itself but the fire it ignites within us.',
            'We all have moments when we feel stuck—tethered to routines, fears, or the weight of indecision. In those moments, a word can be a lifeline. Consider "courage." It doesn`t erase fear; it challenges us to move through it. When we let "courage" guide us, we take the first step, even if the path is unclear. The destination? It could be anywhere—a new career, a new city, a new perspective.',
            'What`s your word? Is it "grow," urging you to evolve beyond your current self? Is it "dare," pushing you to take risks you`ve long avoided? Or perhaps it`s "create," calling you to bring something new into the world. Your word is personal, a reflection of your deepest desires and untapped potential.',
            'A single word—be it "go," "courage," or "dream"—can ignite a spark that propels us forward, breaking the chains of doubt and routine. Embracing its power, we find inspiration to move toward boundless possibilities, where the journey to Anywhere Everywhere begins with one step, guided by a word that resonates deep within, urging us to explore, create, and live without limits.'
        ]
    }, {
        id: 2,
        uname: '@MamangGanteng',
        name: 'Mamang Dokar',
        img: '/pic2.jpg',
        titlePage: 'Becoming A Boring Person',
        subheading: 'A New Way of Life to Celebrate Yourself',
        paragraph: [
            'In a world that glorifies constant hustle, extravagant adventures, and curated personas, choosing to be a "boring" person feels like a quiet rebellion. But boring, in this sense, isn`t about being dull—it`s about embracing the beauty of simplicity and finding joy in the ordinary. It`s the courage to prioritize what truly matters to you, whether that`s a cozy evening with a book, a predictable morning routine, or a life unburdened by the pressure to perform. Becoming a boring person means celebrating yourself by living authentically, free from the need to chase trends or seek external validation.',
            'The allure of a boring life lies in its clarity. When you strip away the noise—the endless notifications, the race for likes, the pressure to be extraordinary—you create space for self-discovery. A boring person might spend their weekends tending to a small garden or savoring a cup of coffee while watching the sunrise. These moments, though seemingly mundane, are where you reconnect with your inner rhythm. They allow you to listen to your thoughts, understand your desires, and build a life that aligns with your values. In this simplicity, you find a profound sense of purpose that no spotlight can rival.',
            'Embracing boredom also means redefining success. Society often equates a meaningful life with grand achievements or constant excitement, but a boring person knows that fulfillment can be found in consistency and small victories. It`s the satisfaction of mastering a new recipe, the quiet pride of maintaining a tidy home, or the comfort of nurturing long-lasting relationships. These acts, repetitive and unremarkable to others, become the foundation of a life well-lived. By celebrating the ordinary, you cultivate a deep appreciation for the present moment, transforming the everyday into something sacred.',
            'Of course, choosing this path requires courage. It means saying no to the fear of missing out and yes to the joy of missing out. It`s about resisting the urge to compare your quiet evenings to someone else`s highlight reel. A boring person doesn`t shy away from solitude or routine; they lean into it, knowing that these are the spaces where self-acceptance flourishes. By letting go of the need to be seen as interesting, you gain the freedom to define what makes you happy. This act of defiance—choosing yourself over societal expectations—is a radical way to honor your individuality.',
            'Ultimately, becoming a boring person is a celebration of you—unfiltered, unhurried, and unapologetic. It`s a reminder that you don`t need to be loud, flashy, or extraordinary to be enough. In the stillness of a boring life, you discover the richness of your own company and the beauty of a world that doesn`t demand your performance. So, light a candle, play your favorite song, or simply sit with your thoughts. Embrace the ordinary, and watch how it transforms into a life that feels like a love letter to yourself.'
        ]
    }, {
        id: 3,
        uname: '@LetTheWindLead',
        name: 'Jean Gunnhildr',
        img: '/pic3.jpg',
        titlePage: 'When Someone Breaks Your Heart',
        subheading: 'Pick Up Your Pieces to Become A Whole Again',
        paragraph: [
            'A broken heart feels like a shattering of the self, each fragment carrying a memory, a hope, or a piece of who you thought you were. When someone breaks your heart, the pain can be all-consuming, leaving you to wonder if you`ll ever feel whole again. Yet, within this ache lies an opportunity—a chance to gather the scattered pieces of your spirit and rebuild a version of yourself that is stronger, wiser, and more resilient. The journey begins with acknowledging the hurt, not as a wound to hide, but as a map that guides you toward healing.',
            'The first step is to sit with your pain, to let it exist without judgment. It`s tempting to rush past the grief, to distract yourself with busyness or bury the hurt in denial, but healing requires presence. Cry if you need to, write the words you can`t say aloud, or simply breathe through the weight of it all. Each tear, each quiet moment, is a way of honoring what was lost. In this vulnerability, you begin to find the edges of your broken pieces—not to force them back together, but to understand their shape and how they fit into the mosaic of who you are becoming.',
            'As you move forward, rediscover the parts of yourself that existed before the heartbreak. Reconnect with the hobbies, passions, or dreams that once lit you up, even if they feel distant now. Take small steps—a walk in nature, a song that stirs your soul, or a conversation with a friend who sees you clearly. These acts are like gathering scattered fragments, each one a reminder of your worth beyond the relationship that ended. Slowly, you`ll find that your identity isn`t defined by the one who left but by the strength you cultivate in their absence.',
            'Forgiveness, whether for them or yourself, is a crucial piece of the puzzle. It doesn`t mean excusing the hurt or pretending it didn`t happen; it means releasing the hold that pain has on your heart. Forgiveness is a gift you give yourself, a way to set down the heavy burden of resentment. As you let go, you create space for new possibilities—new joys, new connections, new versions of love. This process isn`t linear; some days, the pieces will feel scattered again, but each effort to forgive brings you closer to wholeness.',
            'In time, you`ll realize that the act of picking up your pieces has transformed you. The cracks in your heart, once raw and jagged, become lines of strength, like the golden seams in kintsugi, the Japanese art of repairing broken pottery. You are not the same as before, nor should you be. You are whole again, not because the pain is gone, but because you`ve woven it into a life that is uniquely yours. With every step, you`ve chosen yourself, and that choice is the foundation of a love that no one can break—a love for the person you`ve become.'
        ]
    }
  ]
  const found = users.find((element) => element.uname === username)
  console.log(found)
  return (
    <div className='flex flex-col gap-5 bg-gray-100'>
        <NavBar/>
        <div className='h-[10svh]'></div>
        <div className='flex flex-row justify-center items-center mb-10'>
            <div className='flex flex-col h-fit w-[60%] bg-white rounded-3xl gap-5 px-10 py-10'>
                <span className='text-4xl font-bold'>{found.titlePage}</span>
                <span className='text-gray-500 text-2xl font-semibold'>{found.subheading}</span>
                <div className='flex flex-row gap-2'>
                    <span>Written by: </span>
                    <span>{found.uname}</span>
                    <span>{found.name}</span>
                </div>
                <img src={found.img} alt="banner-photo" className='size-[30svw] self-center'/>
                <div className='flex flex-col gap-3 text-justify'>
                    {found.paragraph.map((item,index) => (
                        <p key={`paragraph-${index}`}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArticlePage