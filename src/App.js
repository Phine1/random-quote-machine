
import './App.css';
import React from 'react';
import { Navbar } from './Components/Navbar/navbar';
import { Quotes } from './Components/Quotes/quotes';



// const quotes = [
//   'We cannot solve problems with the kind of thinking we employed when we came up with them.',
//   'Learn as if you will live forever, live like you will die tomorrow.', 
//   'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too',
//   'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.',
//   'When you change your thoughts, remember to also change your world',
//   'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest',
//   'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together',
//   'Success is not final; failure is not fatal: It is the courage to continue that counts',
//   'It is better to fail in originality than to succeed in imitation.',
//   'The road to success and the road to failure are almost exactly the same.'
// ];

// const authors = [
//   'Albert Einstein', 'Mahatma Gandhi', 'Mark Twain','Eleanor Roosevelt','Norman Vincent Peale',
//   'Walter Anderson','Diane McLaren','Winston S. Churchill','Herman Melville','Colin R. Davis'
// ];




class App extends React.Component {

  // handleAuthorChange() {
  //   setTimeout(() => {
  //     let targetElement = document.getElementById('author');
  //     targetElement.textContent = `--  ${authors[Math.floor(Math.random()*authors.length)]}  --`;
  //   }, 600)
   
  // }
  // handleQuoteChange() {
  //   setTimeout(() => {
  //     let targetElement = document.getElementById('text')
  //     targetElement.textContent = quotes[Math.floor(Math.random()*quotes.length)]; 
  //   }, 600)
   
  // }
  render() {
  return (
    <div className="background">
      <Navbar />

      <Quotes 
      // handleAuthor={this.handleAuthorChange} 
      // handleQuoteChange={this.handleQuoteChange}
          />
    </div>
    
  );
  }
}

export default App;
