import Card from "../components/Card";
import NavBar from "../components/Nav";
export const meta = () => {
  return [
    { title: "Ann's Website" },
    { name: "description", content: "Welcome to my website!" },
  ];
};

const cardsData = [
  {
    title: "Mitio Gamified Social Media App",
    text: "Social media app with gamified elements designed to recognize acheivements and top performing students.",
    link: "https://junior-design-capstone-jia-1343.vercel.app",
    list: ['React','NextJS', 'MongoDB', 'MUI', 'AWS S3']
  },
  {
    title: "Personal Website",
    text: "What you're looking at right now. :)",
    link: "./",//github
    list: ['Remix','Contentful', 'TailwindCSS']
  },
  {
    title: "Voting Dapp",
    text: "A decentralized voting dapp based on Ethereum Blockchain.",
    link: "https://github.com/ann-guo/dapp",
    list: ['Solidity','Ethers.js','Next.js']
  },
  // Add more card data as needed
  //min-h-screen flex justify-center items-center bg-graph-paper dark:bg-graph-paper-dark dark:bg-gray-800 dark:text-white
];

export default function Index() {
  

  return (
    
    
    
  <div className="text-center mt-24 sm:mt-24" class="text-center text-slate-900 dark:text-white bg-graph-paper dark:bg-graph-paper-dark dark:bg-true-gray-800 dark:text-white">
  
    <h1 className="text-3xl sm:text-6xl p-8">Hello <span role="img" aria-label="wave">👋</span>, I'm Ann</h1>
    <div>
      <h2 className="mt-10 sm:text-3x1 px-9">hi, i like to build cool projects and share my learnings.</h2>
      <h2>i am available for new opportunities.</h2>
    </div>
    <div className="mt-8 sm:mt-16 flex justify-center sm:mx-64 lg:mx-15 space-x-14">
      {/*<button>
        Resume
      </button>*}
      {/* Update GitHub Profile Link */}
      <a href="https://github.com/ann-guo" aria-label="GitHub Profile Link" target="_blank">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
      {/*gmail icon from iconify*/}
      <a href="mailto:annguo63@gmail.com" aria-label="Email" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path fill="currentColor" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
      </a>
    </div>
    <h1 className="text-3xl pt-12 px-6 font-bold">PROJECTS</h1>
    <div class="container mx-auto px-9 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-9 pb-16 max-w-screen-lg">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          link={card.link}
          list={card.list}
        />
      ))}
    </div>
    <body>

    </body>
</div>

    
  );
}
