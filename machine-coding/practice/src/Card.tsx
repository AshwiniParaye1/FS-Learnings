import { useEffect, useState } from "react";

interface CardType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Card() {
  const [card, setCard] = useState<CardType[]>();

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    setCard(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(JSON.stringify(card));

  return (
    <div className="flex flex-wrap justify-center items-center m-4">
      {card && card.length > 0 && (
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {card.map((cardData) => (
            <div className="">
              <div className="w-md h-40 border-2 p-2">
                <h2 className="text-amber-800">{cardData.title}</h2>
                <p>{cardData.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
