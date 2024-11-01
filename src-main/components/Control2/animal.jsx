import React from "react";
import AnimalsLsit from "./animals";

const Animal = () => {
  let myAnimals = [
    {
      id: 1,
      nom: "Tom",
      espece: "Chat",
      age: 2,
      descr: "un chat hyper gentil",
      image: "/images/Tom.jpg",
      liked:false
    },
    {
      id: 2,
      nom: "Greta",
      espece: "Chien",
      age: 5,
      descr: "une chienne adorable pour les enfants",
      image: "/images/Greta.jpg",
      liked:false
    },
    {
      id: 3,
      nom: "Brandon",
      espece: "Chien",
      age: 10,
      descr: "Ce bulldog est fait pour les grands amateurs",
      image: "/images/Brandon.jpg",
      liked:false
    },
  ];

  return (
    <>
      <div></div>
      {myAnimals.map((animo) => (
        <AnimalsLsit
          key={animo.id}
          nom={animo.nom}
          espece={animo.espece}
          age={animo.age}
          descr={animo.descr}
          image={animo.image}
        />
      ))}
    </>
  );
};

export default Animal;
