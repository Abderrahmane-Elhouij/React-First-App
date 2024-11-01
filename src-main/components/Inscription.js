import React, { useState } from "react";

function Inscription() {
  const [name, setName] = useState();
  const [daten, setDaten] = useState();
  const [ville, setVille] = useState();
  const [loisir, setLoisir] = useState([]);
  const [image, setImage] = useState();
  const [file, setFile] = useState("");
  const [text, setText] = useState(false);

  const ImageChange = (e) => {
    convertFile(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(true);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setLoisir([...loisir, ` ${value}`]);
    } else {
      setLoisir(loisir.filter((x) => x !== ` ${value}`));
    }
  };

  const back = () => {
    setText(false);
    setLoisir([]);
  };

  function convertFile(files) {
    if (files) {
      setFile(files);
      const fileRef = files[0];
      // console.log(fileRef);
      const fileType = fileRef.type;
      // console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev) => {
        setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }
  return (
    <>
      {text ? (
        <>
          Je suis {name} né le {daten} à {ville} et mes loisirs sont : {loisir}
          <input
            type="button"
            onClick={() => back()}
            name="back"
            value="Back"
          />
        </>
      ) : (
        <div className="container ">
          <br />
          <fieldset
            class="form-group"
            style={{ padding: "10px", border: "2px solid black" }}
          >
            <h1 className="">Inscription</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="font-weight-bold">L'identifiant</label>
                <input
                  type="text"
                  name="uname"
                  required
                  className="form-control"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="font-weight-bold">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  name="upass"
                  required
                />
              </div>
              <div className="form-group">
                <label className="font-weight-bold">Date de naissance </label>
                <input
                  type="date"
                  name="upass"
                  required
                  className="form-control"
                  onChange={(event) => setDaten(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="font-weight-bold">Ville </label>
                <select
                  id="ville"
                  name="ville"
                  onChange={(event) => setVille(event.target.value)}
                  required
                  className="form-control"
                >
                  <option value="Casablanca">Casablanca</option>
                  <option value="Marrakesh">Marrakech</option>
                  <option value="Ouarzazate">Ouarzazate</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Agadir">Agadir</option>
                </select>
              </div>
              <div className="form-group">
                <label className="font-weight-bold">Genre: </label>
                <br />
                <input
                  type="radio"
                  id="homme"
                  name="genre"
                  value="Homme"
                  style={{ marginLeft: "120px" }}
                />
                <label htmlFor="homme">Homme</label>
                <br />
                <input
                  type="radio"
                  id="femme"
                  name="genre"
                  value="Femme"
                  style={{ marginLeft: "120px" }}
                />
                <label htmlFor="femme">Femme</label> 
              </div>
              <div className="form-group">
                <label className="font-weight-bold">Loisirs : </label>
                <br />
                <input
                  type="checkbox"
                  id="sport"
                  name="loisir"
                  value="Sport"
                  onChange={handleChange}
                  style={{ marginLeft: "120px" }}
                />

                <label htmlFor="sport">Sport</label>
                <br />
                <input
                  type="checkbox"
                  id="lecture"
                  name="loisir"
                  value="Lecture"
                  onChange={handleChange}
                  style={{ marginLeft: "120px" }}
                />

                <label htmlFor="lecture">Lectures</label>
                <br />
                <input
                  type="checkbox"
                  id="musique"
                  name="loisir"
                  value="Musique"
                  onChange={handleChange}
                  style={{ marginLeft: "120px" }}
                />
                <label htmlFor="musique">Musique</label>
                <br />
                <label className="font-weight-bold">Photo : </label>
                <input type="file" onChange={ImageChange} accept="image/*" />
                {/* type MIME image/jpeg */}
                {image && (
                  <img
                    src={image}
                    alt="/"
                    class="img-fluid"
                    style={{ width: "80px", borderRadius: "80px" }}
                  />
                )}
              </div>
              <div className="form-group" style={{ textAlign: "center" }}>
                <input
                  type="submit"
                  value="S'inscrire"
                  className="btn btn-success"
                  style={{ width: "50%" }}
                />
              </div>
            </form>
          </fieldset>
        </div>
      )}
    </>
  );
}

export default Inscription;
