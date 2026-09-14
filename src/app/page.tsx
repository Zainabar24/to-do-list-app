"use client"
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  return (
    <main>
       <h2>My To Do App</h2>
       <form> 
        <input placeholder="What needs to be done?"/>
        <button type="submit">Add</button>
        <button type="reset">Edit</button>

       </form>
    </main>
  );
}
