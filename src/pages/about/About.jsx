import React from 'react'

import Navbar from '../../components/navbar/Navbar';

import "./about.scss";

const About = () => {
  return (
    <>
    <div className="about">
      <Navbar />
      <h1>ABOUT OUR SITE</h1>
      <h2>explane</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero atque voluptates eos officiis quo in quisquam corporis aspernatur veritatis quis numquam nobis ut perferendis, maxime voluptate quia blanditiis delectus voluptatibus at consequatur quae deserunt libero? Non, minima consectetur! Dolorum sit magni, quibusdam in velit enim aliquid nemo officiis ratione animi!</p>
      <ul>
        <li>good</li>
        <li>bad</li>
        <li>ok</li>
        <li>very bad</li>
        <li>exelent</li>
        <li>not ok</li>
      </ul>
      <table border={3}>
        <tr>
          <th>num</th>
          <th>title</th>
          <th>user</th>
          <th>date</th>
          <th>range</th>
        </tr>
        <tr>
          <td>1</td>
          <td>summer</td>
          <td>ali</td>
          <td>2020</td>
          <td>50</td>
        </tr>
        <tr>
          <td>2</td>
          <td>winter</td>
          <td>mamad</td>
          <td>2021</td>
          <td>60</td>
        </tr>        <tr>
          <td>3</td>
          <td>jungle</td>
          <td>ali</td>
          <td>2022</td>
          <td>70</td>
        </tr>        <tr>
          <td>4</td>
          <td>black</td>
          <td>morteza</td>
          <td>2020</td>
          <td>80</td>
        </tr>
      </table>
      <h2>Thanks A lot</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil explicabo cum molestias nesciunt temporibus nobis, debitis soluta id quod rerum tempore corporis consequatur deleniti in itaque repellendus possimus fuga expedita asperiores magnam quis quas. Asperiores veniam vitae accusamus? Expedita quae ab molestias, hic ducimus voluptatum officiis, perspiciatis ratione delectus aperiam eligendi soluta nulla culpa odit laudantium corporis cum, aspernatur dolore sit eum aliquam atque blanditiis. Architecto ducimus excepturi quae ex reiciendis praesentium vitae impedit quidem pariatur sint quam perspiciatis illo illum ab, saepe, eum amet veritatis temporibus! Dolore at quas laboriosam quod cupiditate labore, eius veritatis esse alias repellendus, ipsa exercitationem in ipsum nesciunt voluptates? Ad provident laboriosam consequatur libero! Dolores perspiciatis, eius porro iusto voluptatem facere sunt deserunt illo aut libero laudantium, nesciunt magnam suscipit fuga tenetur molestiae id distinctio fugit inventore quos hic dignissimos quibusdam, quia similique. Esse totam odit ipsum voluptatibus. Dolore, laudantium earum laboriosam amet ad quo explicabo fugit quidem natus repellat officia labore placeat laborum, hic fugiat, doloribus necessitatibus dolores perferendis consectetur! Magni totam officia aspernatur rerum earum sunt, suscipit rem quis dicta fuga amet dolor odio magnam eos similique quibusdam, laboriosam nisi quos explicabo veritatis quae? Tempora voluptates, natus nobis velit tenetur veniam qui.</p>
    </div>
    </>
  )
}

export default About