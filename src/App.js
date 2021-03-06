import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐คฅ": "Lying Face",
  "๐": "Relieved Face",
  "๐": "Pensive Face",
  "๐ช": "Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": "Sleeping Face",
  "๐ท": "Face with Medical Mask",
  "๐ค": "Face with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คข": "Nauseated Face",
  "๐คฎ": "Face Vomiting",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": "Cold Face",
  "๐ฅด": "Woozy Face",
  "๐ต": "Dizzy Face",
  "๐คฏ": "Exploding Head",
  "๐ค ": "Cowboy Hat Face",
  "๐ฅณ": "Partying Face",
  "๐": "Smiling Face with Sunglasses",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐": "Worried Face",
  "๐": "Slightly Frowning Face",
  "โน๏ธ": "Frowning Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",
  "๐ณ": "Flushed Face",
  "๐ฅบ": "Pleading Face",
  "๐ฆ": "Frowning Face with Open Mouth",
  "๐ง": "Anguished Face",
  "๐จ": "Fearful Face",
  "๐ฐ": "Anxious Face with Sweat",
  "๐ฅ": "Sad but Relieved Face",
  "๐ข": "Crying Face",
  "๐ญ": "Loudly Crying Face",
  "๐ฑ": "Face Screaming in Fear",
  "๐": "Confounded Face",
  "๐ฃ": "Persevering Face",
  "๐": "Disappointed Face",
  "๐": "Downcast Face with Sweat",
  "๐ฉ": "Weary Face",
  "๐ซ": "Tired Face",
  "๐ฅฑ": "Yawning Face",
  "๐ค": "Face with Steam From Nose",
  "๐ก": "Pouting Face",
  "๐ ": "Angry Face",
  "๐คฌ": "Face with Symbols on Mouth",
  "๐": "Smiling Face with Horns",
  "๐ฟ": "Angry Face with Horns",
  "๐": "Skull",
  "โ ๏ธ": "Skull and Crossbones",
  "๐ฉ": "Pile of Poo",
  "๐คก": "Clown Face",
  "๐น": "Ogre",
  "๐บ": "Goblin",
  "๐ป": "Ghost",
  "๐ฝ": "Alien",
  "๐พ": "Alien Monster",
  "๐ค": "Robot",
  "๐บ": "Grinning Cat",
  "๐ธ": "Grinning Cat with Smiling Eyes",
  "๐น": "Cat with Tears of Joy",
  "๐ป": "Smiling Cat with Heart-Eyes",
  "๐ผ": "Cat with Wry Smile",
  "๐ฝ": "Kissing Cat",
  "๐": "Weary Cat",
  "๐ฟ": "Crying Cat",
  "๐พ": "Pouting Cat",
  "๐": "Kiss Mark",
  "๐": "Waving Hand",
  "๐ค": "Raised Back of Hand",
  "๐๏ธ": "Hand with Fingers Splayed",
  "โ": "Raised Hand",
  "๐": "Vulcan Salute",
  "๐": "OK Hand",
  "๐ค": "Pinching Hand",
  "โ๏ธ": "Victory Hand",
  "๐ค": "Crossed Fingers",
  "๐ค": "Love-You Gesture",
  "๐ค": "Sign of the Horns",
  "๐ค": "Call Me Hand",
  "๐": "Backhand Index Pointing Left",
  "๐": "Backhand Index Pointing Right",
  "๐": "Backhand Index Pointing Up",
  "๐": "Middle Finger",
  "๐": "Backhand Index Pointing Down",
  "โ๏ธ": "Index Pointing Up",
  "๐": "Thumbs Up",
  "๐": "Thumbs Down",
  "โ": "Raised Fist",
  "๐": "Oncoming Fist",
  "๐ค": "Left-Facing Fist",
  "๐ค": "Right-Facing Fist",
  "๐": "Clapping Hands",
  "๐": "Raising Hands",
  "๐": "Open Hands",
  "๐คฒ": "Palms Up Together",
  "๐ค": "Handshake",
  "๐": "Folded Hands",
  "โ๏ธ": "Writing Hand",
  "๐": "Nail Polish",
  "๐คณ": "Selfie",
  "๐ช": "Flexed Biceps",
  "๐ฆพ": "Mechanical Arm",
  "๐ฆฟ": "Mechanical Leg",
  "๐ฆต": "Leg",
  "๐ฆถ": "Foot",
  "๐": "Ear",
  "๐ฆป": "Ear with Hearing Aid",
  "๐": "Nose",
  "๐ง ": "Brain",
  "๐ฆท": "Tooth",
  "๐ฆด": "Bone",
  "๐": "Eyes",
  "๐๏ธ": "Eye",
  "๐": "Tongue",
  "๐": "Mouth",
  "๐ถ": "Baby",
  "๐ง": "Child",
  "๐ฆ": "Boy",
  "๐ง": "Girl",
  "๐ง": "Person",
  "๐ฑ": "Person: Blond Hair",
  "๐จ": "Man",
  "๐ง": "Person: Beard",
  "๐จโ๐ฆฐ": "Man: Red Hair",
  "๐จโ๐ฆฑ": "Man: Curly Hair",
  "๐จโ๐ฆณ": "Man: White Hair",
  "๐จโ๐ฆฒ": "Man: Bald",
  "๐ฉ": "Woman",
  "๐ฉโ๐ฆฐ": "Woman: Red Hair",
  "๐งโ": "Person: Red Hair",
  "๐ฉโ๐ฆฑ": "Woman: Curly Hair",
  "๐ฉโ๐ฆณ": "Woman: White Hair",
  "๐ฉโ๐ฆฒ": "Woman: Bald",
  "๐ฑโโ๏ธ": "Woman: Blond Hair",
  "๐ฑโโ๏ธ": "Man: Blond Hair",
  "๐ง": "Older Person",
  "๐ด": "Old Man",
  "๐ต": "Old Woman",
  "๐": "Person Frowning",
  "๐โโ๏ธ": "Man Frowning",
  "๐โโ๏ธ": "Woman Frowning",
  "๐": "Person Pouting",
  "๐โโ๏ธ": "Man Pouting",
  "๐โโ๏ธ": "Woman Pouting",
  "๐": "Person Gesturing No",
  "๐โโ๏ธ": "Man Gesturing No",
  "๐โโ๏ธ": "Woman Gesturing No",
  "๐": "Person Gesturing OK",
  "๐โโ๏ธ": "Man Gesturing OK",
  "๐โโ๏ธ": "Woman Gesturing OK",
  "๐": "Person Tipping Hand",
  "๐โโ๏ธ": "Man Tipping Hand",
  "๐โโ๏ธ": "Woman Tipping Hand",
  "๐": "Person Raising Hand",
  "๐โโ๏ธ": "Man Raising Hand",
  "๐โโ๏ธ": "Woman Raising Hand",
  "๐ง": "Deaf Person",
  "๐งโโ๏ธ": "Deaf Man",
  "๐งโโ๏ธ": "Deaf Woman",
  "๐": "Person Bowing",
  "๐โโ๏ธ": "Man Bowing",
  "๐โโ๏ธ": "Woman Bowing",
  "๐คฆ": "Person Facepalming",
  "๐คฆโโ๏ธ": "Man Facepalming",
  "๐คฆโโ๏ธ": "Woman Facepalming",
  "๐คท": "Person Shrugging",
  "๐คทโโ๏ธ": "Man Shrugging",
  "๐คทโโ๏ธ": "Woman Shrugging",
  "๐ฃ": "Footprints",
  "๐งณ": "Luggage",
  "๐": "Closed Umbrella",
  "โ๏ธ": "Umbrella",
  "๐": "Jack-O-Lantern",
  "๐งต": "Thread",
  "๐งถ": "Yarn",
  "๐": "Glasses",
  "๐ถ๏ธ": "Sunglasses",
  "๐ฅฝ": "Goggles",
  "๐ฅผ": "Lab Coat",
  "๐ฆบ": "Safety Vest",
  "๐": "Necktie",
  "๐": "T-Shirt",
  "๐": "Jeans",
  "๐งฃ": "Scarf",
  "๐งค": "Gloves",
  "๐งฅ": "Coat",
  "๐งฆ": "Socks",
  "๐": "Dress",
  "๐": "Kimono",
  "๐ฅป": "Sari",
  "๐ฉฑ": "One-Piece Swimsuit",
  "๐ฉฒ": "Briefs",
  "๐ฉณ": "Shorts",
  "๐": "Bikini",
  "๐": "Womanโs Clothes",
  "๐": "Purse",
  "๐": "Handbag",
  "๐": "Clutch Bag",
  "๐": "Backpack",
  "๐": "Manโs Shoe",
  "๐": "Running Shoe",
  "๐ฅพ": "Hiking Boot",
  "๐ฅฟ": "Flat Shoe",
  "๐ ": "High-Heeled Shoe",
  "๐ก": "Womanโs Sandal",
  "๐ฉฐ": "Ballet Shoes",
  "๐ข": "Womanโs Boot",
  "๐": "Crown",
  "๐": "Womanโs Hat",
  "๐ฉ": "Top Hat",
  "๐": "Graduation Cap",
  "๐งข": "Billed Cap",
  "โ๏ธ": "Rescue Workerโs Helmet",
  "๐": "Lipstick",
  "๐": "Ring",
  "๐ผ": "Briefcase",
  "๐ฉธ": "Drop of Blood",
  "๐": "See-No-Evil Monkey",
  "๐": "Hear-No-Evil Monkey",
  "๐": "Speak-No-Evil Monkey",
  "๐ฅ": "Collision",
  "๐ซ": "Dizzy",
  "๐ฆ": "Sweat Droplets",
  "๐จ": "Dashing Away",
  "๐ต": "Monkey Face",
  "๐": "Monkey",
  "๐ฆ": "Gorilla",
  "๐ฆง": "Orangutan",
  "๐ถ": "Dog Face",
  "๐": "Dog",
  "๐ฆฎ": "Guide Dog",
  "๐โ๐ฆบ": "Service Dog",
  "๐ฉ": "Poodle",
  "๐บ": "Wolf",
  "๐ฆ": "Fox",
  "๐ฆ": "Raccoon",
  "๐ฑ": "Cat Face",
  "๐": "Cat",
  "๐ฆ": "Lion",
  "๐ฏ": "Tiger Face",
  "๐": "Tiger",
  "๐": "Leopard",
  "๐ด": "Horse Face",
  "๐": "Horse",
  "๐ฆ": "Unicorn",
  "๐ฆ": "Zebra",
  "๐ฆ": "Deer",
  "๐ฎ": "Cow Face",
  "๐": "Ox",
  "๐": "Water Buffalo",
  "๐": "Cow",
  "๐ท": "Pig Face",
  "๐": "Pig",
  "๐": "Boar",
  "๐ฝ": "Pig Nose",
  "๐": "Ram",
  "๐": "Ewe",
  "๐": "Goat",
  "๐ช": "Camel",
  "๐ซ": "Two-Hump Camel",
  "๐ฆ": "Llama",
  "๐ฆ": "Giraffe",
  "๐": "Elephant",
  "๐ฆ": "Rhinoceros",
  "๐ฆ": "Hippopotamus",
  "๐ญ": "Mouse Face",
  "๐": "Mouse",
  "๐": "Rat",
  "๐น": "Hamster",
  "๐ฐ": "Rabbit Face",
  "๐": "Rabbit",
  "๐ฟ๏ธ": "Chipmunk",
  "๐ฆ": "Hedgehog",
  "๐ฆ": "Bat",
  "๐ป": "Bear",
  "๐จ": "Koala",
  "๐ผ": "Panda",
  "๐ฆฅ": "Sloth",
  "๐ฆฆ": "Otter",
  "๐ฆจ": "Skunk",
  "๐ฆ": "Kangaroo",
  "๐ฆก": "Badger",
  "๐พ": "Paw Prints",
  "๐ฆ": "Turkey",
  "๐": "Chicken",
  "๐": "Rooster",
  "๐ฃ": "Hatching Chick",
  "๐ฆ ": "Microbe",
  "๐": "Bouquet",
  "๐ธ": "Cherry Blossom",
  "๐ฎ": "White Flower",
  "๐ต๏ธ": "Rosette",
  "๐น": "Rose",
  "๐ฅ": "Wilted Flower",
  "๐บ": "Hibiscus",
  "๐ป": "Sunflower",
  "๐ผ": "Blossom",
  "๐ท": "Tulip",
  "๐ฑ": "Seedling",
  "๐ฒ": "Evergreen Tree",
  "๐ง": "Mate",
  "๐ง": "Ice",
  "๐ฅข": "Chopsticks",
  "๐ฝ๏ธ": "Fork and Knife with Plate",
  "๐ด": "Fork and Knife",
  "๐ฅ": "Spoon",
  "๐ด๏ธ": "Person in Suit Levitating",
  "๐ง": "Person Climbing",
  "๐งโโ๏ธ": "Man Climbing",
  "๐งโโ๏ธ": "Woman Climbing",
  "๐คบ": "Person Fencing",
  "๐": "Horse Racing",
  "โท๏ธ": "Skier",
  "๐": "Snowboarder",
  "๐๏ธ": "Person Golfing",
  "๐๏ธโโ๏ธ": "Man Golfing",
  "๐๏ธโโ๏ธ": "Woman Golfing",
  "๐": "Person Surfing",
  "๐โโ๏ธ": "Man Surfing",
  "๐โโ๏ธ": "Woman Surfing",
  "๐ฃ": "Person Rowing Boat",
  "๐ฃโโ๏ธ": "Man Rowing Boat",
  "๐ฃโโ๏ธ": "Woman Rowing Boat",
  "๐": "Person Swimming",
  "๐โโ๏ธ": "Man Swimming",
  "๐โโ๏ธ": "Woman Swimming",
  "โน๏ธ": "Person Bouncing Ball",
  "โน๏ธโโ๏ธ": "Man Bouncing Ball",
  "โน๏ธโโ๏ธ": "Woman Bouncing Ball",
  "๐๏ธ": "Person Lifting Weights",
  "๐๏ธโโ๏ธ": "Man Lifting Weights",
  "๐๏ธโโ๏ธ": "Woman Lifting Weights",
  "๐ด": "Person Biking",
  "๐ดโโ๏ธ": "Man Biking",
  "๐ดโโ๏ธ": "Woman Biking",
  "๐ต": "Person Mountain Biking",
  "๐ตโโ๏ธ": "Man Mountain Biking",
  "๐ตโโ๏ธ": "Woman Mountain Biking",
  "๐คธ": "Person Cartwheeling",
  "๐คนโโ๏ธ": "Woman Juggling",
  "๐ง": "Person in Lotus Position",
  "๐งโโ๏ธ": "Man in Lotus Position",
  "๐งโโ๏ธ": "Woman in Lotus Position",
  "๐ช": "Circus Tent",
  "๐น": "Skateboard",
  "๐ถ": "Canoe",
  "๐๏ธ": "Reminder Ribbon",
  "๐๏ธ": "Admission Tickets",
  "๐ซ": "Ticket",
  "๐๏ธ": "Military Medal",
  "๐": "Trophy",
  "๐งฉ": "Puzzle Piece",
  "โ๏ธ": "Chess Pawn",
  "๐ญ": "Performing Arts",
  "๐จ": "Artist Palette",
  "๐จ๏ธ": "Left Speech Bubble",
  "๐ฏ๏ธ": "Right Anger Bubble",
  "๐ญ": "Thought Balloon",
  "๐ค": "Zzz",
  "โจ๏ธ": "Hot Springs",
  "๐": "Barber Pole",
  "๐": "Stop Sign",
  "": "Meaning will appear here..."
};

var emojiWeKnow = Object.keys(emojiDictionary);
var headingText = "Inside Outtt ";
var colorb = "white";

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Not present in the DataBase.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <header class="head">
        <h1 style={{ color: colorb }}>{headingText}</h1>
      </header>
      <input
        onChange={emojiInputHandler}
        placeholder={"Enter the emoji here...."}
      ></input>
      <div id="output">
        <b>{meaning}</b>
      </div>
      <h3>Emoji's you can Click On</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.6rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}

      <footer>
        <div class="foot">
          <a id="link" href="https://mahikaportfolio.netlify.app/projects.html">
            View Other Projects
          </a>
        </div>
      </footer>
    </div>
  );
}
