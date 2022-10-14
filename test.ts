## Introduction @unplugged

![Cartoon of the Rock Paper Scissors game](/static/mb / projects / a4 - motion.png)

Use the accelerometer and the screen to build a ** dreidel ** game that you can play with your friends!

## Step 1 @fullscreen

Add a`` || input: on shake || `` block to run code when you shake the @boardname @.

```blocks
input.onGesture(Gesture.Shake, () => {

})
```

## Step 2 @fullscreen

Add a``dreidel`` variable and place the`` || variables: set dreidel to || `` block in the shake event.

![A animation that shows how to create a variable](/static/mb / projects / rock - paper - scissors / newvar.gif)

## Step 3 @fullscreen

Add a`` || math: pick random || `` block to pick a random number from`1` to`4` and store it in the variable named``dreidel``.

```blocks
let dreidel = 0;
input.onGesture(Gesture.Shake, () => {
    dreidel = randint(1, 4)
})
```

In a later step, each of the possible numbers(`1`, `2`, `3` or`4`) is matched to its own picture.The picture is shown on the LEDs when its matching number is picked.

## Step 4 @fullscreen

Place an`` || logic: if|| `` block under the`` || math: pick random || `` and check whether``dreidel`` is equal to``1``.Add a`` || basic: show leds || `` block that shows a picture of a nun.The number`1` will mean nun.

![How to drag an if statement](/static/mb / projects / rock - paper - scissors /if.gif)

    ```blocks
let dreidel = 0;
input.onGesture(Gesture.Shake, () => {
    dreidel = randint(1, 4)
    if (dreidel == 1) {
        basic.showLeds(`
        .# # #.
            . . .#.
            . . .#.
            . . .#.
            # # # #.
            `)
    }
})
```

## Step 5 @fullscreen

Click on the ** SHAKE ** button in the simulator.If you try enough times, you should see a picture of nun on the screen.

![Shaking a @boardname @simulator](/static/mb / projects / rock - paper - scissors / rpsshake.gif)

## Step 6 @fullscreen

Click the ** (+) ** button to add an`` || logic:else|| `` section.

![Adding an else clause](/static/mb / projects / rock - paper - scissors / ifelse.gif)

    ```blocks
let dreidel = 0;
input.onGesture(Gesture.Shake, () => {
    dreidel = randint(1, 4)
    if (dreidel == 1) {
        basic.showLeds(`
    . .# #.
            . . .#.
            . . .#.
            . . .#.
            .# # #.
            `)
    } else {

    }
})
```

## Step 7 @fullscreen

Add a`` || basic: show leds || `` block inside the`` || logic:else|| ``.Make a picture of a shin in the LEDs.

```blocks
let dreidel = 0;
input.onGesture(Gesture.Shake, () => {
    dreidel = randint(1, 4)
    if (dreidel == 1) {
        basic.showLeds(`
    . .# #.
            . . .#.
            . . .#.
            . . .#.
            .# # #.
            `)
    } else {
        basic.showLeds(`
            #. . .#
            #.#.#
            # # #.#
            #. . .#
            # # # # #
    `)
    }
})
```

## Step 8 @fullscreen

Click the`` + `` button again to add an`` || logic:else if|| `` section.Now, add a conditional block for `` || logic: dreidel = 2 || `` to the condition in `` || logic:else if|| ``.Since``dreidel`` can only be`1`, `2`, `3` or`4`, your code is covering all possible cases!

![Adding an else if clause](/static/mb / projects / rock - paper - scissors / ifelseif.gif)

## Step 9 @fullscreen

Get one more`` || basic: show leds || `` block and put it in the`` || logic:else if|| ``.Make a picture of a hei in the LEDs.

```blocks
let dreidel = 0;
input.onGesture(Gesture.Shake, () => {
    dreidel = randint(1, 4)
    if (dreidel == 1) {
        basic.showLeds(`
    . .# #.
            . . .#.
            . . .#.
            . . .#.
            .# # #.
            `)
    } else {
        basic.showLeds(`
            #. . .#
            #.#.#
            # # #.#
            #. . .#
            # # # # #
    `)
    } else {
        basic.showLeds(`
    . . . . .
            .# # #.
            . . .#.
            .#.#.
            .#.#.
            `)
    }
})
```

## Step 10 @fullscreen

Get one more`` || basic: show leds || `` block and put it in the`` || logic:else if|| ``.Make a picture of a gimel in the LEDs.

```blocks
let dreidel = 0;
input.onGesture(Gesture.Shake, () => {
    dreidel = randint(1, 4)
    if (dreidel == 1) {
        basic.showLeds(`
    . .# #.
            . . .#.
            . . .#.
            . . .#.
            .# # #.
            `)
    } else {
        basic.showLeds(`
            #. . .#
            #.#.#
            # # #.#
            #. . .#
            # # # # #
    `)
    } else {
        basic.showLeds(`
    . . . . .
            .# # #.
            . . .#.
            .#.#.
            .#.#.
            `)
    } else {
        basic.showLeds(`
    .# # #.
            . . .#.
            .# # #.
            .#.#.
            .#.#.
            `)    
    }
})
```

## Step 10 @fullscreen


Click on the ** SHAKE ** button in the simulator and check to see that each image is showing up.

![Shaking a @boardname @simulator](/static/mb / projects / rock - paper - scissors / rpssim3.gif)

## Step 11 @fullscreen

If you have a @boardname @, click on`` | Download | `` and follow the instructions to get the code
onto your @boardname @.Your game is ready! Gather your friends and play with your dreidel!

![A @boardname @ in a hand](/static/mb / projects / rock - paper - scissors / hand.jpg)