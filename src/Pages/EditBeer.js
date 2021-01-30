import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "../App.css";
import database from "../Services/database";

export default function EditBeer() {
  const [beer, setBeer] = useState();
  const { id } = useParams();
  useEffect(() => {
    database
      .collection("beers")
      .doc(id)
      .onSnapshot((snapshot) => {
        setBeer(snapshot.data());
      });
  }, [id]);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="brewery" defaultValue={beer.brewery} ref={register} />
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
