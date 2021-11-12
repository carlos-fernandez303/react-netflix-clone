import React from "react";
import { useEffect } from "react";
import "./About.css";
export const About = () => {
  useEffect(() => {
    document.title = "About Netflix";
  });
  return (
    <div className="about">
      <h1 className="about-header">About Netflix</h1>
      <img
        className="media-photo"
        src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
        alt="Netflix Media"
      />
      <p class="about-text">
        At Netflix, we want to entertain the world. Whatever your taste, and no
        matter where you live, we give you access to best-in-class TV shows,
        movies and documentaries. Our members control what they want to watch,
        when they want it, with no ads, in one simple subscription. We’re
        streaming in more than 30 languages and 190 countries, because great
        stories can come from anywhere and be loved everywhere. We are the
        world’s biggest fans of entertainment, and we’re always looking to help
        you find your next favorite story. <br />
        <br />
        Netflix, in full Netflix, Inc., media-streaming and video-rental company
        founded in 1997 by American entrepreneurs Reed Hastings and Marc
        Randolph. It is also involved in the creation of original programming.
        Corporate headquarters are in Los Gatos, California. <br />
        <br />
        In 1999 Netflix began offering an online subscription service through
        the Internet. Subscribers chose movie and television titles from
        Netflix’s Web site; the shows were then mailed to customers in the form
        of DVDs, along with prepaid return envelopes, from one of more than 100
        distribution centres. Although customers typically rented for a flat
        monthly fee as many movies per month as they wished, the number of DVDs
        in their possession at any one time was limited according to their
        subscription plans. Netflix had tens of thousands of movie titles in its
        catalog. <br />
        <br /> In 2006 Netflix launched the $1 million Netflix Prize contest to
        see if anyone could improve by 10 percent its recommendation system, an
        algorithm for predicting an individual’s movie preferences based on
        previous rental data. Three years later the prize was awarded to
        BellKor’s Pragmatic Chaos, a team made up of seven mathematicians,
        computer scientists, and engineers from the United States, Canada,
        Austria, and Israel. <br />
        <br /> In 2007 Netflix began offering subscribers the option to stream
        some of its movies and television shows directly to their homes through
        the Internet. For most subscription plans, the streaming service was
        unlimited. Netflix subsequently partnered with manufacturers of various
        consumer electronics products, including video game consoles and Blu-ray
        Disc players, in order to enable its videos to be streamed over an
        Internet connection to those devices. In 2010 Netflix introduced a
        streaming-only plan that offered unlimited streaming service but no
        DVDs. Netflix then expanded beyond the United States by offering the
        streaming-only plan in Canada in 2010, in Latin America and the
        Caribbean in 2011, and in the United Kingdom, Ireland, and Scandinavia
        in 2012. By 2016 its streaming service was available in more than 190
        countries and territories. Netflix had announced in September 2011 that
        it would split its streaming and mail-based services, with the latter to
        be called Qwikster, but abandoned the planned split a month later,
        citing an outcry from its subscribers. While its streaming services
        became the biggest revenue generator—with more than 130 million
        subscribers in 2018—the rental division remained profitable. <br />
        <br /> Beginning in 2013 with the episodic drama series House of Cards,
        the company offered video content produced specifically for its
        streaming service. Such content became a major focus of Netflix, and by
        the end of 2018 it offered approximately 1,000 original titles. Its
        notable series included Unbreakable Kimmy Schmidt, Stranger Things,
        Narcos, and The Crown. It also produced numerous movies—notably Roma
        (2018), which won three Academy Awards, including best foreign language
        film.
      </p>
    </div>
  );
};
