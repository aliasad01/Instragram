import hamza from "../src/assets/hamza.jpg";
import haris from "../src/assets/haris.jpg";
import fahad from "../src/assets/fahad.jpg";
import waqas from "../src/assets/waqas.jpg";
import haris1 from "../src/assets/haris1.JPG";
import haris2 from "../src/assets/haris2.jpg"
import taha from "../src/assets/taha.jpg"
import taha1 from "../src/assets/taha1.jpeg"
import Ameen from "../src/assets/Ameen.jpg"
import bilal from "../src/assets/bilal.jpg"

const messages = [
  {
    userid: 1,
    username: "ALI ASAD",
    profileimg: haris2,
    messages: "hi mate how are you",
    inbox: [
      {
        messageid: 123,
        message: "Fine what about you",
      },
      {
        messageid: 23,
        message: "Lets have a meetup ",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 13,
        message: "My name is Ali Asad",
      },
      {
        messageid: 13,
        message: "and whats your good name",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
    ],
  },
  {
    userid: 2,
    username: "AHMAD",
    profileimg: taha,
    messages: "hi mate how are you",
    inbox: [
      {
        messageid: 123,
        message: "Fine what about you",
      },
      {
        messageid: 23,
        message: "Lets have a meetup ",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 13,
        message: "My name is Ahmad",
      },
      {
        messageid: 13,
        message: "and whats your good name",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
    ],
  },

  {
    userid: 3,
    username: "UMAIR",
    profileimg: waqas,
    messages: "My Name is Umair",
    inbox: [
      {
        messageid: 123,
        message: "Hello How are You",
      },
      {
        messageid: 23,
        message: "Yes i am good ",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 13,
        message: "My name is Umair",
      },
    ],
  },
  {
    userid: 4,
    username: "AMMAR",
    profileimg: fahad,
    messages: "My Name is Ammar",
    inbox: [
      {
        messageid: 123,
        message: "Hello How are You",
      },
      {
        messageid: 23,
        message: "Yes i am good ",
      },
      {
        messageid: 123,
        message: "Where Do you live?",
      },
      {
        messageid: 123,
        message: "What is your name?",
      },
      {
        messageid: 13,
        message: "Call me when you are free",
      },
    ],
  },
];
const Data = [
  {
    id: 1,
    title: "Ali Asad",
    subtitle: "Software Engineer",
    profileimg: Ameen,
    postimg: Ameen,
    postDetails: "At Bilals Wedding",
    followers: "11000",
    following: "14",
    postImages: [
      {
        postImage: Ameen,
      },
      {
        postImage: Ameen,
      },
      {
        postImage: Ameen,
      },
      {
        postImage: Ameen,
      },
      {
        postImage: Ameen,
      },
      {
        postImage: Ameen,
      },
    ],
    comments: [
      {
        username: "Awais",
        userimg: taha,
        coment: "He is a good developer",
      },
      {
        username: "Ali",
        userimg: hamza,
        coment: "Looking Fabulous",
      },
      {
        username: "Asad",
        userimg: waqas,
        coment: "He is very straight forward person",
      },
      {
        username: "Adil",
        userimg: fahad,
        coment: "He is a my good friend",
      },
      {
        username: "Saleem",
        userimg: fahad,
        coment: "He is a my good friend",
      },
    ],
  },
  {
    id: 2,
    title: "Umair",
    subtitle: "SQA",
    profileimg: taha,
    postDetails: "",
    postimg: taha,
    posts: "10",
    followers: "800",
    following: "675",
    postImages: [
      {
        postImage: taha1,
      },
      {
        postImage: taha,
      },
      {
        postImage: taha,
      },
      {
        postImage: taha1,
      },
    ],
    comments: [
      {
        username: "Ahmad",
        userimg: haris,
        coment: "SEO Expert",
      }
    ],
  },
  {
    id: 3,
    img: haris,
    title: "Malik",
    subtitle: "Owner At Malik Mobiles",
    followers: "1100",
    following: "120",
    profileimg: taha,
    postDetails: "Contact us for Used or new Mobiles",
    postimg: taha,
    posts: "141",
    postImages: [
      {
        postImage: taha,
      },
      {
        postImage: taha1,
      },
      {
        postImage: Ameen,
      },
      {
        postImage: Ameen,
      },
      {
        postImage: Ameen,
      },
      {
        postImage: hamza,
      },
      {
        postImage: hamza,
      }
    ],
    comments: [
      {
        username: "Akmal",
        userimg: taha,
        coment: "Need a new mobile in the range of 50k",
      },
      {
        username: "Haris Ishtiaq",
        userimg: haris,
        coment: "Is A32 Available",
      },
    ],
  },
  {
    id: 4,
    img: Ameen,
    title: "Bilal Akmal",
    subtitle: "Doctor of physiotherapy",
    posts: "132",
    profileimg: bilal,
    postimg: bilal,
    postDetails: "Signing off 2022",
    followers: "800",
    following: "657",
    postImages: [
      {
        postImage: bilal,
      },
      {
        postImage: bilal,
      },
    ],
    comments: [
      {
        username: "Haris ishtiaq",
        userimg: taha,
        coment: "Congratulations",
      },

      {
        username: "Usama Javed",
        userimg: fahad,
        coment: "MA sha Allah",
      },
    ],
  },
  {
    id: 5,
    title: "Hamza ",
    subtitle: "Bachelors in buisness",
    profileimg: fahad,
    postimg: fahad,
    postDetails: "At work",
    posts: "14",
    followers: "3232",
    following: "1321",
    postImages: [
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
      {
        postImage: fahad,
      },
    ],
    comments: [
      {
        username: "Arslan Akmal",
        userimg: taha,
        coment: "He is a good developer",
      },
      {
        username: "Adeel Hamza",
        userimg: hamza,
        coment: "He is a good person",
      },
      {
        username: "Waqas Khaliq",
        userimg: waqas,
        coment: "He is very straight forward person",
      },
      {
        username: "Haris Ishtiaq",
        userimg: fahad,
        coment: "He is a my good friend",
      },
    ],
  },
];

export { messages, Data };
