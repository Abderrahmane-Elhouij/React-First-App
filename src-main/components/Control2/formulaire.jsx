import React, { useState } from "react";

const Form = () => {
  const [nom, setNom] = useState();
  const [date, setDate] = useState();
  const [ville, setVille] = useState();
  const [loisir, setLoisir] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [test, setTest] = useState(false);

  const handleImage = (e) => {
    convertImage(e.target.files);
  };

  const convertImage = (files) => {
    if (files) {
      setFile(files);
      const fileRef = files[0];
      const fileType = fileRef.type;
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (e) => {
        setImage(`data:${fileType};base64,${btoa(e.target.result)}`);
      };
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setLoisir([...loisir, value]);
    } else {
      setLoisir(loisir.filter((item) => item !== value));
    }
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    setTest(true);
  };

  return (
    <>
      {test ? (
        `Je suis ${nom} né le ${date} à ${ville} et mes loisirs sont : ${loisir}`
      ) : (
        <form onSubmit={hundleSubmit}>
          <fieldset>
            <label>L'identifiant:</label>
            <br />
            <input
              type="text"
              onChange={(e) => setNom(e.target.value)}
              required
            />
            <br />
            <br />
            <label htmlFor="">Mot de passe:</label>
            <br />
            <input type="password" required />
            <br />
            <br />
            <label htmlFor="">Date de naissance:</label>
            <br />
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <br />
            <br />
            <label htmlFor="">Ville:</label>
            <br />
            <select onChange={(e) => setVille(e.target.value)} required>
              <option value="Marrakech">Marrakech</option>
              <option value="Fes">Fes</option>
              <option value="Tanger">Tanger</option>
            </select>
            <br />
            <br />
            <label htmlFor="">Genre:</label>
            <br />
            Homme
            <input type="radio" name="grnre" />
            <br />
            Femme
            <input type="radio" name="genre" />
            <br />
            <br />
            <label htmlFor="">Loisir:</label>
            <br />
            <input
              type="checkbox"
              value="Sport"
              name="loisir"
              onChange={handleChange}
            />{" "}
            Sport
            <br />
            <input
              type="checkbox"
              value="Lecture"
              name="loisir"
              onChange={handleChange}
            />{" "}
            Lecture
            <br />
            <input
              type="checkbox"
              value="Musique"
              name="loisir"
              onChange={handleChange}
            />{" "}
            Musique <br />
            <br />
            <input type="file" accept="image/*" onChange={handleImage} />
            <img
              src={image}
              alt=""
              style={{
                width: 100 + "px",
                height: 100 + "px",
                borderRadius: 15 + "px",
              }}
            />
            <br />
            <br />
            <input type="submit" value="S'inscrire" />
          </fieldset>
        </form>
      )}
    </>
  );
};

export default Form;
