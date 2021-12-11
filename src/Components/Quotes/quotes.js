import React from "react";
import './quotes.css'

const quotes = [
    'We cannot solve problems with the kind of thinking we employed when we came up with them.',
    'Learn as if you will live forever, live like you will die tomorrow.', 
    'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too',
    'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.',
    'When you change your thoughts, remember to also change your world',
    'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest',
    'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together',
    'Success is not final; failure is not fatal: It is the courage to continue that counts',
    'It is better to fail in originality than to succeed in imitation.',
    'The road to success and the road to failure are almost exactly the same.'
  ];
  
  const authors = [
    'Albert Einstein', 'Mahatma Gandhi', 'Mark Twain','Eleanor Roosevelt','Norman Vincent Peale',
    'Walter Anderson','Diane McLaren','Winston S. Churchill','Herman Melville','Colin R. Davis'
  ];
  
export class Quotes extends React.Component {
   
  handleAuthorChange() {
    setTimeout(() => {
      let targetElement = document.getElementById('author');
      targetElement.textContent = `--  ${authors[Math.floor(Math.random()*authors.length)]}  --`;
    }, 600)
   
  }
  handleQuoteChange() {
    setTimeout(() => {
      let targetElement = document.getElementById('text')
      targetElement.textContent = quotes[Math.floor(Math.random()*quotes.length)]; 
    }, 600)
   
  }
    render() {

    return(
            <div id='quote-box'>
                
                <section className='author-section'>
                    <h2>Quote by:</h2>
                    <h4 id='author'>-- Mark Twain --</h4>
                </section>
             
                <section className='quotes-section'>
                    <p id='text'>
                         It is better to fail in originality than to succeed in imitation.
                     </p>
                </section>
                <section className='footer'>
                    <a id='phinehas' rel="noreferrer" href='https://github.com/Phine1' target='_blank' title='visit github page'><h4>Phinehas</h4></a>

                    <button id='new-quote' onClick={() => {
                            this.handleAuthorChange(); this.handleQuoteChange()}} >Next Quote</button>

                    <a className='twitter-share-button' id='tweet-quote' rel="noreferrer" href='https://twitter.com/intent/tweet?text='
                       target='_blank' title='share on twitter'><h4>Tweet Quote</h4></a>
                </section> 
            
                
            </div>
        )
    }
}

