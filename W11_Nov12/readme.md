<h1>WEEK 11 | Nov 12 </h1>
<h3><b>JS Practice</b></h3>
<p><b>Learning Process Presentations:</b><br>
Kiva, Taline & Marcello</p>
<p><b>JS Code Examples</b><br><br>
Going back to <b><a href="modal_offImageclose">modal</a></b>: how to close clicking outside image<br>
- while looking at example, talk about JS events, addEventListener, event.target<br><br>
Event bubbling: check out the <a href="eventbubbling.html">example</a>. Look at querySelector('#id') and syntax for addEventListener<br><br>

<b>Slider examples + exercise</b><br>
Here are <a href="sliders">the examples</a><br><br>

Version A: <br>
- loop through all cards, collect them into an array, then increment through them. <br>
- This script is erasing and building cards onclick. clean up the code, by wrapping code into reusable functions.<br><br>

Version B: <br>
- building on long row of flex items and then changing their position, revealing one card at a time. <br>
- Check out the way transition is set (make sure that css property is defined initially in .css for the transition to be applied correctly in JS)<br><br>

Version C: <br>
- this slider is build through adding and removing an active class.<br>
- Firstly check out sibling class in .css (~ selector). <br>
- Also look at classList.add() & classList.remove(), getAttribute();<br>
- bttn.onclick :: we are creating an event in JS, rather than setting it inside html
<br><br>

Version D: <br>
- this is built with JQuery, makes it a bit easier to make an infinite slider. last(), after() & first() are usuful in this infinite looping.<br>
- need to link to CDN in html<br>
- won't talk too much about JQuery today, but check out the code, if it's useful to your project. <br>



</p>
