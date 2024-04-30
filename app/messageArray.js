// Function to generate a random date within the last year and return in "DD/MM/YYYY" format
function getRandomDate() {
  const startDate = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );
  const endDate = new Date();
  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  // Formatting the date to "DD/MM/YYYY"
  const day = String(randomDate.getDate()).padStart(2, "0");
  const month = String(randomDate.getMonth() + 1).padStart(2, "0"); // Month starts from 0
  const year = randomDate.getFullYear();

  return `${day}/${month}/${year}`;
}

// Array of names and messages
export const messagesArray = [
  {
    name: "John Doe",
    message: "Hello there",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/1",
  },
  {
    name: "Alice Smith",
    message: "Goodbye friend",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/2",
  },
  {
    name: "Bob Johnson",
    message: "Howdy partner",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/3",
  },
  {
    name: "Emma Brown",
    message: "Nice job",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/4",
  },
  {
    name: "Michael Lee",
    message: "Great work",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/5",
  },
  {
    name: "Sarah Clark",
    message: "Awesome job",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/6",
  },
  {
    name: "David Miller",
    message: "Well done",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/7",
  },
  {
    name: "Emily Davis",
    message: "Keep going",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/8",
  },
  {
    name: "James Wilson",
    message: "Stay strong",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/20",
  },
  {
    name: "Olivia Taylor",
    message: "Never give up",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/9",
  },
  {
    name: "Daniel White",
    message: "Keep smiling",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/10",
  },
  {
    name: "Sophia Anderson",
    message: "Dream big",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/11",
  },
  {
    name: "Matthew Martinez",
    message: "Work hard",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/12",
  },
  {
    name: "Lily Thomas",
    message: "Stay positive",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/13",
  },
  {
    name: "William Harris",
    message: "Be kind",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/14",
  },
  {
    name: "Ava Jackson",
    message: "Spread love",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/15",
  },
  {
    name: "Ethan Taylor",
    message: "Believe in yourself",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/16",
  },
  {
    name: "Mia Wilson",
    message: "You rock",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/17",
  },
  {
    name: "Alexander Moore",
    message: "Stay focused",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/18",
  },
  {
    name: "Grace Robinson",
    message: "Enjoy life",
    date: getRandomDate(),
    src: "https://source.unsplash.com/random/19",
  },
];

console.log(messagesArray);
