TO create a Memory Card Game

First: 
    Need to create the basic Structure for the flip Card game Using Html.
    styles for the elements can be specified using Css by linking them to our Html.
    Javascript can be linked to our Html aswell.
    In .Js file lets create a nmaeless function and call it Immediately next to it
    so that when ever the fils is opened js will Execute.

Array Jumbling:
    lets create an Array which contains Letters as our cards contents.
    NOw each time the content of the cards need tobe shuffled which can be achived by Fisher-Yates Shuffle Algorithm.

Creating cards And specifying Content:
    Now we have to create the cards using javascript and specify its content with respect to the random array that we created.
    Here in this case we have 16 cards as well as 16 letters in the array.
    Also lets specify Addevent listener to all these cards that we created (which is buttons)
    so we can track any events with respect to it.
    lets call the function attached to the event listener.

Event listener FUnction:
    this tracks the click thats been made on the cards with that help we can manipulate the HTMl contents.
    In this case for ecah click we have made a specific css property to be attached or removed.
    when a first card is clicked say its content is visible Also when second card is cliked its to visible.we have limited the no of visible cards at a time to 2...
    when these two cards content match they are disabled in unhide position.
    if not the are made to return to the original hide position in a few seconds.

    so this gets repeated until he finds all the matching pairs.

    also to prevent the user from selecting the same card twice.we have made a switch like say if the card is open it closes if close it opens in this case say hide or unhide.

    Every time a match is found its being tracked so once all cards are matched the user get an pop That he wins.

    a restart button that resets all the cards so that you can Play once again all new.

How to play:

      We need to match the cards with same contents.
      when we click a card it reveals the content.
      on a go you can select two cards where if therir content matches u get a point.
      If not they return to their ideal position which is hide,
      during every click you need to memorise where the letters are present and figure and match them with same.
      once you match all cards You Win!




     




  




    


#   M e m o r y - C a r d g a m e  
 #   M e m o r y - C a r d g a m e  
 #   M e m o r y - C a r d g a m e  
 