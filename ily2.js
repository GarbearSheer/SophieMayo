//Hi so these are what comments look like. In case you were to check out the source code, I'm writing these to explain what is going on in the code
//These right here are modules. They are basically blocks of code that a developer could make or download from someone else. In this case I downloaded colors to shorthand font color. Readline is a built-in module that reads user input.
const readline = require('readline')
let colors = require('colors')

//This is initializing the readline interface or basically just the command prompt.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//This is the main function. Everything leads back to here for your easy use. You can see the message inside.
let main = function () {
    rl.question(`${colors.rainbow('Welcome to part 2 of my litty messages!')}
${colors.cyan('I hope you enjoy :p Most of these are interactive and have some games. So I made like commands to go to each day so you can replay them if you want. Type the number of the day you would like to see.')}
    
    ${colors.red('[')}${colors.green('1')}${colors.red(']')}   ${colors.red('[')}${colors.green('2')}${colors.red(']')}   ${colors.red('[')}${colors.green('3')}${colors.red(']')}   ${colors.red('[')}${colors.green('4')}${colors.red(']')}   ${colors.red('[')}${colors.green('5')}${colors.red(']')}   ${colors.red('[')}${colors.green('6')}${colors.red(']')}   ${colors.red('[')}${colors.green('7')}${colors.red(']')}   ${colors.red('[')}${colors.green('8')}${colors.red(']')}   ${colors.red('[')}${colors.green('9')}${colors.red(']')}   ${colors.red('[')}${colors.green('10')}${colors.red(']')}   ${colors.red('[')}${colors.green('11')}${colors.red(']')}
    
    
`, (answer) => {
        //Each of these here are checks to see what you type. This wasn't the best way to do this and this whole thing was a learning event for me so my code got progressively better. This day 1 message is like this because this was before I decided I wanted to games and events. I started that on day 2.
        if (String(answer) === "1") {
            rl.question(`[21 April, 2019]   Day 1's Message: Hoi I'm back to writing. I thought about and I you matter more than to me just not to give a shit about continuing this. You seemed to enjoy the first sooooooo I'll do another for a month and surprise you. I'm staying this time lel. I'm still nervous tho. I hope you actually FaceTime me after your exams, that way you don't have an excuse not to. I'm still salty you didn't facetime me on my birthday. And I'm salty that you are getting me something when I told you not to and all I wanted was to FaceTime >:( It's cool tho I'll take it. I feel weird now not facetiming you especially after we would for 7 hours a day. I understand tho it really isn't a problem bc 7 hours is a lot. I just don't do anything oops. Anyway I hope you enjoy this one. I will put the work in and make it genuine. <3 love u x.
    
        Daily Salad Pic: https://pics.me.me/thumb_me-eating-salad-hilarious-ted-anything-else-%3E-eating-a-salad-36569913.png
    
Press enter to continue...`.cyan, (answer) => {
                main()
            })
        } else if (String(answer) === "2") {
            //These with the parenthesis are functions. They are also blocks of code or just mini-modules. When they are called they just run the code inside.
            console.log(`Today I made you a fun game :) If you complete it you get your message for today.`)
            game()
        } else if (String(answer) === "3") {
            quiz()
        } else if (String(answer) === "4") {
            memory()
        } else if (String(answer) === "5") {
            maze()
        } else if (String(answer) === "6") {
            tower()
        } else if (String(answer) === "7") {
            time()
        } else if (String(answer) === "8") {
            pickup()
        } else if (String(answer) === "9") {
            zalgo()
        } else if (String(answer) === "10") {
            caesar()
        } else if (String(answer) === "11") {
            thisIsIt()
        }
    })
}
main()
//You can see here how the functions are made. These three happen to be the three times dots you see in between questions on day 2.
let console1 = function () {
    console.log('.')
}

let console2 = function () {
    console.clear()
    console.log('..')
}

let console3 = function () {
    console.clear()
    console.log('...')
}
//This next part is very confusing. Long story made short: A function needs to be created before you call it. So if you call it above when it is made, it will think it isn't there. So that is why this segment is out of order.
let afterWait3 = function () {
    console.clear()
    //This is the third time you say no.
    rl.question(`Ok then, let's play a game of rocc, paper, scissors and if I win I love you more and if you win, you love me more.
    
    Type "rocc", "paper", or "scissors"... `, (answer) => {
        //Yes, I admit its rigged, but its all part of the game ;)))
        if (answer.toLowerCase() === "rocc") {
            console.clear()
            rl.question(`You played rocc I played paper, I win :)
            
            Press enter to continue...`, (answer) => {
                main()
            })
        } else if (answer.toLowerCase() === "paper") {
            console.clear()
            rl.question(`You played paper I played scissors, I win :)
            
            Press enter to continue...`, (answer) => {
                main()
            })
        } else if (answer.toLowerCase() === "scissors") {
            console.clear()
            rl.question(`You played scissors I played rocc, I win :)
            
Press enter to continue...`, (answer) => {
                main()
            })
        } else if (answer.toLowerCase() === "no") {
            console.clear()
            //This is when you win and this is your message.
            rl.question(`Fine, you win 🙄

            ${colors.magenta('Your reward is your daily complementary salad pic: http://realfunny.net/uploads/how_to_eat_salad._4851369173.jpg')}

And more importantly, your message for today:
${colors.magenta(`Day 2's message (22 April, 2019): Hoi I think I found the direction I want this one to go. I'm really excited to see how it turns out. I'm challenging myself to make this one really good, fun, and interactive. Anyway we FINALLY facetimed. Jk, but I enjoyed it. I miss you. I hope your foot feels better lmaooo. Good luck on your drving thingy. Also I'm sorry if this doesn't end up being 30 messages for the month. I started future days already and I'm spending sometimes over and hour on the projects. I will try my best.`)}
            
Press enter to continue...`, (answer) => {
                //You will see this at the end of every event. It calls the main function that sends you back to that main messag area.
                main()
            })
        } else {
            console.clear()
            rl.question(`That wasn't rocc, paper, or scissors so I guess you forfeit and I win :)
            
Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}

let afterWait2 = function () {
    console.clear()
    //The second time you say no
    rl.question(`Question: Do I love you more? Yes or Yes.

    `, (answer) => {
        if (String(answer).toLowerCase() === "yes") {
            console.clear()
            rl.question(`Wew, Bet. Answer recorded.

Press enter to continue...`, (answer) => {
                main()
            })
        } else if (String(answer).toLowerCase() === "no") {
            console.clear()
            setTimeout(console1, 1000)
            setTimeout(console2, 2000)
            setTimeout(console3, 3000)
            setTimeout(afterWait3, 4000)
        } else {
            console.clear()
            rl.question(`That wasn't a yes or yes answer, so I'm going to assume that the answer was a yes :)

Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}

let afterWait = function () {
    console.clear()
    //The first time you say no
    rl.question(`Question: Do I love you more? Yes or No.
  
    `, (answer) => {
        if (String(answer).toLowerCase() === "yes") {
            console.clear()
            rl.question(`Good, I'm glad you agree. Answer recorded.

Press enter to continue...`, (answer) => {
                main()
            })
        } else if (String(answer).toLowerCase() === "no") {
            console.clear()
            setTimeout(console1, 1000)
            setTimeout(console2, 2000)
            setTimeout(console3, 3000)
            setTimeout(afterWait2, 4000)
        } else {
            console.clear()
            rl.question(`That wasn't a yes or no answer, so I'm going to assume that the answer was a yes :)

Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}
//The orginal game function
let game = function () {
    console.clear()
    //The first question. You can see how it is out of order.
    rl.question(`Question: Do I love you more? Yes or No.
  
`, (answer) => {
        if (String(answer).toLowerCase() === "yes") {
            console.clear()
            rl.question(`Data recorded. Good answer if you ask me.

Press enter to continue...`, (answer) => {
                main()
            })
        } else if (String(answer).toLowerCase() === "no") {
            console.clear()
            setTimeout(console1, 1000)
            setTimeout(console2, 2000)
            setTimeout(console3, 3000)
            setTimeout(afterWait, 4000)
        } else {
            console.clear()
            rl.question(`That wasn't a yes or no answer, so I'm going to assume that the answer was a yes :)

Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}
//This is the quiz about me function that is called. Not much to explain here, it just goes through all the questions and checks to see if you answer is right.
let quiz = function () {
    console.clear()
    rl.question(`Today's challenge is a quiz :)))), but its about meeeee. If you get all of the questions right you unlock today's message. You can retry the quiz as much as you want, I'll just be deeply hurt if you don't get it first try. ${colors.italic(`That is a joke good luck.`)}
    
    
Press enter to start`, (answer) => {
        console.clear()
        rl.question(`${colors.magenta(`Question 1:`)} What is my favorite color?
    
    
`, (answer) => {
            if (String(answer).toLowerCase() === "blue") {
                rl.question(`${colors.cyan('Correct!')}

Press enter for the next question.`, (answer) => {
                    rl.question(`${colors.magenta(`Question 2:`)} What is my favorite dog's name?
                    
                    
`, (answer) => {
                        if (String(answer).toLowerCase() === "jax" || String(answer).toLowerCase() === "fat boy" || String(answer).toLowerCase() === "phat boy" || String(answer).toLowerCase() === "fat boi" || String(answer).toLowerCase() === "phat boi") {
                            rl.question(`${colors.cyan('Correct!')}

Press enter for the next question.`, (answer) => {
                                rl.question(`${colors.magenta(`Question 3:`)} What is the day you told me you liked me? Answer: [day, month] I.E. 29, March


`, (answer) => {
                                    if (String(answer).toLowerCase() === "9, january") {
                                        rl.question(`${colors.cyan('Correct!')}

Press enter for the next question.`, (answer) => {
                                            rl.question(`${colors.magenta(`Question 4:`)} What is my fav food?


`, (answer) => {
                                                if (String(answer).toLowerCase() === "ramen" || String(answer).toLowerCase() === "rawmen" || String(answer).toLowerCase() === "raw men") {
                                                    rl.question(`${colors.cyan('Correct!')}

Press enter for the next question.`, (answer) => {
                                                        rl.question(`${colors.magenta(`Question 5:`)} Who my fav person?

`, (answer) => {
                                                            if (String(answer).toLowerCase() === "soph" || String(answer).toLowerCase() === "sophie" || String(answer).toLowerCase() === "sop") {
                                                                rl.question(`${colors.cyan('Correct!')}

You can have your salad picture now: https://img.memecdn.com/when-life-gives-you-a-salad_o_5904111.jpg

And your message: Hi hi. I almost went to bed without writing today's messages like a DUMBASS. Anyway, today was a p standard day. I spent 3 hours making 3 games today including this one. I hope you are liking them so far. Some of my ideas are difficult and I need 30 - 35 of them. It is really so much the ideas, it is the execution. Now that I'm out of discord, I'm working in a place I'm unfamilar with, but I'm making the best of it. I don't want to give you any scrapped game ideas yet because they may come back into play. Now for my day lel. So I went to the doctors and it was ok nothing bad. He said I probably wont get any taller, but it isn't a definate. That's good for you to hear bc ur ShOrT. I was thinking about you so there was no way I could forget to write this. I miss you when ur busy. I'd rather be spending time with you then anyone else. I hope you are still as happy as you were :). I'll try to step it up when it comes to these games, I want them to get better. Anyways ily gn. 


Press enter to continue.`, (answer) => {
                                                                    main()
                                                                })
                                                            } else {
                                                                rl.question(`That is incorrect. You can't see the message until you admit it :P
    
Press enter to continue...`, (answer) => {
                                                                    main()
                                                                })
                                                            }
                                                        })
                                                    })
                                                } else {
                                                    rl.question(`That is incorrect. I honestly don't think you will get this one wrong so idek what to say as a hint.
    
Press enter to continue...`, (answer) => {
                                                        main()
                                                    })
                                                }
                                            })
                                        })
                                    } else {
                                        rl.question(`That is incorrect. (Check our dm)
    
Press enter to continue...`, (answer) => {
                                            main()
                                        })
                                    }
                                })
                            })
                        } else {
                            rl.question(`That is incorrect, he will be sad :/
    
Press enter to continue...`, (answer) => {
                                main()
                            })
                        }
                    })
                })
            } else {
                rl.question(`That is wrong and it is the first question :(
        
        
Press enter to continue...`, (answer) => {
                    main()
                })
            }
        })
    })
}
//This is the start of the code for the memory game. This is all above the memory function so it can be called inside the function. The same goes for variables with functions. If they are called before they exist they wont work
//This is just a countdown sequence, just like the three dots.
let countdown1 = function () {
    console.clear()
    console.log('1')
}

let countdown2 = function () {
    console.clear()
    console.log('2')
}

let countdown3 = function () {
    console.clear()
    console.log('3')
}

let clear = function () {
    console.clear()
}
//sequence 1
//Next each of these are the memory sequences. It logs a number with a background color. You have to repeat the background color.
var s1Color1 = function () {
    console.log(`${colors.bgBlue(`8`)}`)
}
var s1Color2 = function () {
    console.clear()
    console.log(`${colors.bgRed(`8`)}`)
}
var s1Color3 = function () {
    console.clear()
    console.log(`${colors.bgBlue(`8`)}`)
}
var s1Color4 = function () {
    console.clear()
    console.log(`${colors.bgYellow(`8`)}`)
}
var s1Color5 = function () {
    console.clear()
    console.log(`${colors.bgMagenta(`8`)}`)
}
var s2Color1 = function () {
    console.log(`${colors.bgYellow(`8`)}`)
}
var s2Color2 = function () {
    console.clear()
    console.log(`${colors.bgGreen(`8`)}`)
}
var s2Color3 = function () {
    console.clear()
    console.log(`${colors.bgBlue(`8`)}`)
}
var s2Color4 = function () {
    console.clear()
    console.log(`${colors.bgRed(`8`)}`)
}
var s2Color5 = function () {
    console.clear()
    console.log(`${colors.bgMagenta(`8`)}`)
}
var s3Color1 = function () {
    console.log(`${colors.bgGreen(`8`)}`)
}
var s3Color2 = function () {
    console.clear()
    console.log(`${colors.bgRed(`8`)}`)
}
var s3Color3 = function () {
    console.clear()
    console.log(`${colors.bgBlue(`8`)}`)
}
var s3Color4 = function () {
    console.clear()
    console.log(`${colors.bgYellow(`8`)}`)
}
var s3Color5 = function () {
    console.clear()
    console.log(`${colors.bgRed(`8`)}`)
}
var s3Color6 = function () {
    console.clear()
    console.log(`${colors.bgYellow(`8`)}`)
}
var s4Color1 = function () {
    console.log(`${colors.bgRed(`8`)}`)
}
var s4Color2 = function () {
    console.clear()
    console.log(`${colors.bgBlue(`8`)}`)
}
var s4Color3 = function () {
    console.clear()
    console.log(`${colors.bgGreen(`8`)}`)
}
var s4Color4 = function () {
    console.clear()
    console.log(`${colors.bgYellow(`8`)}`)
}
var s5Color1 = function () {
    console.log(`${colors.bgBlue(`8`)}`)
}
var s5Color2 = function () {
    console.clear()
    console.log(`${colors.bgRed(`8`)}`)
}
var s5Color3 = function () {
    console.clear()
    console.log(`${colors.bgBlue(`8`)}`)
}
var s5Color4 = function () {
    console.clear()
    console.log(`${colors.bgGreen(`8`)}`)
}

var transition5 = function () {
    rl.question(`Repeat the sequence...
    
    
`, (answer) => {
        if (String(answer).toLowerCase() === "blue, red, blue, green") {
            rl.question(`${colors.green(`You win!`)}

Here is your salad pic: https://images7.memedroid.com/images/UPLOADED741/5b3c9f580cdf6.jpeg

Here is your message: Hi. I didn't do much today. I made tomorrow's game and BOY DID IT KICK MY ASS. I think I figured out the way I'll give this to you too :3. We didn't facetime today or really talk at all :(. I saw you opened my snap, but I figured you were busy so I left you alone. I hope we can tomorrow. This week feels really slow, even though I had off on Monday. It has been pretty uneventful. I hope it gets better. Also I'm really sorry if this memory game pissed you off because it did me lmao. It's hard to test something i succ at. I miss you. Goodnight <3
        
        
Press enter to continue...`, (answer) => {
                main()
            })
        } else {
            rl.question(`${colors.red(`Incorrect Sequence :(`)}


Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}
//Again here for the same reason you will see this is out of order.
var transition4 = function () {
    rl.question(`Repeat the sequence...
    
    
`, (answer) => {
        //Sequence 5 check
        if (String(answer).toLowerCase() === "red, blue, green, yellow") {
            rl.question(`${colors.green(`Correct Sequence!`)}
                    
                    
Press enter to continue to the next sequence...`, (answer) => {
                setTimeout(countdown1, 1000)
                setTimeout(countdown2, 2000)
                setTimeout(countdown3, 3000)
                setTimeout(clear, 3500)
                setTimeout(s5Color1, 3600)
                setTimeout(s5Color2, 4200)
                setTimeout(s5Color3, 4800)
                setTimeout(s5Color4, 5400)
                setTimeout(clear, 6400)
                setTimeout(transition5, 6400)
            })
        } else {
            rl.question(`${colors.red(`Incorrect Sequence :(`)}
        
        
Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}

var transition3 = function () {
    rl.question(`Repeat the sequence...
    
    
`, (answer) => {
        //Sequence 4 check
        if (String(answer).toLowerCase() === "green, red, blue, yellow, red, yellow") {
            rl.question(`${colors.green(`Correct Sequence!`)}
                
                
Press enter to continue to the next sequence...`, (answer) => {
                setTimeout(countdown1, 1000)
                setTimeout(countdown2, 2000)
                setTimeout(countdown3, 3000)
                setTimeout(clear, 3500)
                setTimeout(s4Color1, 3800)
                setTimeout(s4Color2, 4600)
                setTimeout(s4Color3, 5400)
                setTimeout(s4Color4, 6200)
                setTimeout(clear, 7200)
                setTimeout(transition4, 7200)
            })
        } else {
            rl.question(`${colors.red(`Incorrect Sequence :(`)}
            
            
Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}

var transition2 = function () {
    //Sequence 3 check
    rl.question(`Repeat the sequence...
    
    
`, (answer) => {
        if (String(answer).toLowerCase() === "yellow, green, blue, red, pink") {
            rl.question(`${colors.green(`Correct Sequence!`)}
            
            
Press enter to continue to the next sequence...`, (answer) => {
                setTimeout(countdown1, 1000)
                setTimeout(countdown2, 2000)
                setTimeout(countdown3, 3000)
                setTimeout(clear, 3500)
                setTimeout(s3Color1, 4000)
                setTimeout(s3Color2, 5000)
                setTimeout(s3Color3, 6000)
                setTimeout(s3Color4, 7000)
                setTimeout(s3Color5, 8000)
                setTimeout(s3Color6, 9000)
                setTimeout(clear, 10000)
                setTimeout(transition3, 10000)
            })
        } else {
            rl.question(`${colors.red(`Incorrect Sequence :(`)}
        
        
Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}

var transition1 = function () {
    rl.question(`Repeat the sequence...
    
    
`, (answer) => {
        //Sequence 2 check
        if (String(answer).toLowerCase() === "blue, red, blue, yellow, pink") {
            rl.question(`${colors.green(`Correct Sequence!`)}
        
        
Press enter to continue to the next sequence...`, (answer) => {
                setTimeout(countdown1, 1000)
                setTimeout(countdown2, 2000)
                setTimeout(countdown3, 3000)
                setTimeout(clear, 3500)
                setTimeout(s2Color1, 4000)
                setTimeout(s2Color2, 5000)
                setTimeout(s2Color3, 6000)
                setTimeout(s2Color4, 7000)
                setTimeout(s2Color5, 8000)
                setTimeout(clear, 9000)
                setTimeout(transition2, 9000)
            })
        } else {
            rl.question(`${colors.red(`Incorrect Sequence :(`)}
        
        
Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}


let memory = function () {
    rl.question(`Hai. So today I have a memory game for you. There will be 5 rounds. When you start there will be a 3 second countdown before each level. When the game starts look at the console and you will see a letter with a background color. Ignore the letter, just look at the background color and repeat the colors when it asks you for an answer. Format your answer like this: color, color, color... I.E ${colors.bgBlue(`blue`)}, ${colors.bgYellow(`yellow`)}, ${colors.bgMagenta(`purple`)}
    
Complete the levels to unlock your message :)
I also want to note that there is no purple, it is pink.

Press enter to start...`, (answer) => {
        //Sequence 1 check
        setTimeout(countdown1, 1000)
        setTimeout(countdown2, 2000)
        setTimeout(countdown3, 3000)
        setTimeout(clear, 3500)
        setTimeout(s1Color1, 4750)
        setTimeout(s1Color2, 6000)
        setTimeout(s1Color3, 7250)
        setTimeout(s1Color4, 8500)
        setTimeout(s1Color5, 9750)
        setTimeout(clear, 11000)
        setTimeout(transition1, 11000)

    })
}
//Fun fact: I had to lower the difficulty of the memory game it used to be a lot harder.
//This is the start of the maze function
let maze = function () {
    rl.question(`Today's game is a maze. It is ez pz. Type 'left', 'right', 'up', or 'down' to move the 8 to the end. You can only move on 3's and 1's are walls. Make it to the 2 to get your message ;).
    
    
Press enter to start...`, (answer) => {
        //Right here are the variable of the starting position of the character inside the maze. Think of it as a coordinate plane. The array is below and will give you a better visual representation.
        let player = 8
        let row = 14
        let column = 1
        let mazeStart = function () {
            //All these here are the controls for the character.
            rl.on('line', (input) => {
                if (String(input).toLowerCase() === 'up') {
                    // up arrow
                    row = row - 1
                    if (mazeLayout[row][column] === 0) {
                        console.log(`You cannot move there.`)
                        row = row + 1
                        console.log(mazeLayout)
                    } else {
                        mazeLayout[row][column] = player
                        mazeLayout[row + 1][column] = 3
                        console.clear()
                        console.log(mazeLayout)
                        mazeLayout = mazeLayout
                    }
                }
                if (String(input).toLowerCase() === 'down') {
                    // down arrow
                    row = row + 1
                    if (mazeLayout[row][column] === 0) {
                        console.log(`You cannot move there.`)
                        row = row - 1
                        console.log(mazeLayout)
                    } else if (row === 15 && column === 12) {
                        rl.question(`${colors.green(`Good Job!`)}
            
Here is yo pic: https://t4.rbxcdn.com/c743d41725bd3a8c2d0165f89e4758e3


Here is yo message: Hey hey. I made tomorrow's game and somehow it was more bullshit than the maze. The projects get harder everyday and it is getting difficult to keep up. To put in prespective: The maze ends at line 697. The next one ends at 1538.... Anyway my day was good except my stomach hurt but what else is new. I hope you enjoyed the maze. I hope you do good on your exams and I can't wait to watch the movie with you. I'm excited to give this so you and I hope the games aren't stupid. I really hope Sean doesn't tell you about it. I needed help and some of these ideas had myself and 4 other programmers fucked. So I'm trying my best with their help to get some of this stuff done. No promises but its cool. I miss you. ${color.red('Goodnight <3')}

Press enter to continue...`, (answer) => {
                            main()
                        })
                    } else {
                        mazeLayout[row][column] = player
                        mazeLayout[row - 1][column] = 3
                        console.clear()
                        console.log(mazeLayout)
                        mazeLayout = mazeLayout
                    }
                }
                if (String(input).toLowerCase() === 'left') {
                    // left arrow
                    column = column - 1
                    if (mazeLayout[row][column] === 0) {
                        console.log(`You cannot move there.`)
                        column = column + 1
                        console.log(mazeLayout)
                    } else {
                        mazeLayout[row][column] = player
                        mazeLayout[row][column + 1] = 3
                        console.clear()
                        console.log(mazeLayout)
                        mazeLayout = mazeLayout
                    }
                }
                if (String(input).toLowerCase() === 'right') {
                    // right arrow
                    column = column + 1
                    if (mazeLayout[row][column] === 0) {
                        console.log(`You cannot move there.`)
                        column = column - 1
                        console.log(mazeLayout)
                    } else {
                        mazeLayout[row][column] = player
                        mazeLayout[row][column - 1] = 3
                        console.clear()
                        console.log(mazeLayout)
                        mazeLayout = mazeLayout
                    }
                }

            })
        }
        //This is the maze. I wanted to make it different everytime, but in the interest of time and me doubting you would play it more than once I did not. I am proud of this one tho. The 3's are the paths and the 0's are walls.
        let mazeLayout = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3, 0, 0, 0, 0],
            [0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 3, 3, 0],
            [0, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 0, 0, 3, 0],
            [0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0],
            [0, 3, 0, 3, 3, 0, 0, 3, 3, 0, 3, 0, 0, 3, 0],
            [0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0],
            [0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 3, 3, 0],
            [0, 3, 0, 0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0],
            [0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0],
            [0, 3, 3, 3, 3, 0, 0, 3, 0, 0, 3, 3, 3, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 3, 0, 0],
            [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
        ]

        mazeLayout[14][1] = player
        console.clear()
        console.log(mazeLayout)
        mazeStart()
    })
}
//This is the start of hanoi. These are just the variables that changes how the tower looks.
let level3One = "======="
let level2One = " ===== "
let level1One = "  ===  "
let tower = function () {
    rl.question(`yo yo so today we have this tower game thingy. My boy michal made this in Java and challenged me to replicate it in JavaScript. So I'm making it for you. The proper game is called Tower of Hanoi. They are like those baby toys with the stick and the colored rings. The goal of the game is to restack the original stack on the third stack. You have to move one ring at a time. A bigger ring can not be stacked on a smaller ring, but it can in vise versa. To move rings, type the number of the stick that the ring is on, then type the number of the stick you want to move it to. From left to right it starts at stick one and ends in stick three. For example: to move a ring on one to three just type: 1 3
    
    
Press enter to continue...`, (answer) => {
        //There are bunch of checks that check every possible outcome of the user. It is VERY long.
        let onTowerChange = function () {
            rl.on('line', (input) => {
                if (String(input) === "1 3") {
                    if (towers[1][0] === level1One) {
                        if (towers[5][2] === "   0   ") {
                            towers[1][0] = "   2   "
                            towers[5][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][2] === level2One) {
                            towers[1][0] = "   2   "
                            towers[1][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level2One) {
                            towers[1][0] = "   2   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One) {
                            towers[1][0] = "   2   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][0] === level1One) {
                        if (towers[5][2] === "   0   ") {
                            towers[3][0] = "   5   "
                            towers[5][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level2One) {
                            towers[3][0] = "   5   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One) {
                            towers[3][0] = "   5   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][0] === level1One) {
                        if (towers[5][2] === "   0   ") {
                            towers[5][0] = "   8   "
                            towers[5][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][2] === level2One) {
                            towers[5][0] = "   8   "
                            towers[1][2] = level1One
                            towers = towers
                            if (towers[1][2] === level1One) {
                                console.clear()
                                rl.question(`Good Job! 
                                
Here ur salad: https://66.media.tumblr.com/686fb9dec878754d7913ffca82763319/tumblr_peo6ophLaV1vtts30o1_1280.jpg

Here ur message: Hi hi. So I hoped you liked this game it took forever. As per usual, todays event was harder than it should have been. I feel weird about these because I feel they could be so much better and I don't want them to feel rushed because I want them to be good for you. After I finish this, I think I'm going to be learning Javascript everyday so I can make it much better next time I do it. Anyway my day was good. I had to work, but I played nerf with a bunch of little kids so that was a win. I didn't really talk to you today which was big sad but its ok. Sean asked about you recently which I thought was cool. He knows about this and is helping me. I miss you. Goodnight :).

Here is a cool video I saw that shows how you can solve The Tower of Hanoi with any number of rings: https://www.youtube.com/watch?v=2SUvWfNJSsM&t=396s

Press enter to continue...`, (answer) => {
                                    main()
                                })
                            } else {
                                console.clear()
                                console.log(towers)
                            }
                        } else if (towers[5][2] === level2One) {
                            towers[5][0] = "   8   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One) {
                            towers[5][0] = "   8   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][0] === level2One) {
                        if (towers[5][2] === "   0   ") {
                            towers[3][0] = "   5   "
                            towers[5][2] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One) {
                            towers[3][0] = "   5   "
                            towers[3][2] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][0] === level2One) {
                        if (towers[5][2] === "   0   ") {
                            towers[5][0] = "   8   "
                            towers[5][2] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One) {
                            towers[5][0] = "   8   "
                            towers[3][2] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][0] === level3One) {
                        if (towers[5][2] === "   0   ") {
                            towers[5][0] = "   8   "
                            towers[5][2] = level3One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    }
                } else if (String(input) === "1 2") {
                    if (towers[1][0] === level1One) {
                        if (towers[5][1] === "   9   ") {
                            towers[1][0] = "   2   "
                            towers[5][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][1] === level2One) {
                            towers[1][0] = "   2   "
                            towers[1][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level2One) {
                            towers[1][0] = "   2   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[1][0] = "   2   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][0] === level1One) {
                        if (towers[5][1] === "   9   ") {
                            towers[3][0] = "   5   "
                            towers[5][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level2One) {
                            towers[3][0] = "   5   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[3][0] = "   5   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][0] === level1One) {
                        if (towers[5][1] === "   9   ") {
                            towers[5][0] = "   8   "
                            towers[5][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level2One) {
                            towers[5][0] = "   8   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[5][0] = "   8   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][0] === level2One) {
                        if (towers[5][1] === "   9   ") {
                            towers[3][0] = "   5   "
                            towers[5][1] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[3][0] = "   5   "
                            towers[3][1] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][0] === level2One) {
                        if (towers[5][1] === "   9   ") {
                            towers[5][0] = "   8   "
                            towers[5][1] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[5][0] = "   8   "
                            towers[3][1] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][0] === level3One) {
                        if (towers[5][1] === "   9   ") {
                            towers[5][0] = "   8   "
                            towers[5][1] = level3One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    }
                } else if (String(input) === "3 1") {
                    if (towers[1][2] === level1One) {
                        if (towers[5][0] === "   8   ") {
                            towers[1][2] = "   4   "
                            towers[5][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][0] === level2One) {
                            towers[1][2] = "   8   "
                            towers[1][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level2One) {
                            towers[1][2] = "   8   "
                            towers[3][8] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[1][2] = "   8   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][2] === level1One) {
                        if (towers[5][0] === "   8   ") {
                            towers[3][2] = "   7   "
                            towers[5][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level2One) {
                            towers[3][2] = "   7   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[3][2] = "   7   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][2] === level1One) {
                        if (towers[5][0] === "   8   ") {
                            towers[5][2] = "   0   "
                            towers[5][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][0] === level2One) {
                            towers[5][2] = "   0   "
                            towers[1][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level2One) {
                            towers[5][2] = "   0   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[5][2] = "   0   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][2] === level2One) {
                        if (towers[5][0] === "   8   ") {
                            towers[3][2] = "   7   "
                            towers[5][0] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[3][2] = "   7   "
                            towers[3][0] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][2] === level2One) {
                        if (towers[5][0] === "   8   ") {
                            towers[5][2] = "   0   "
                            towers[5][0] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[5][2] = "   0   "
                            towers[3][0] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][2] === level3One) {
                        if (towers[5][0] === "   8   ") {
                            towers[5][2] = "   0   "
                            towers[5][0] = level3One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    }
                } else if (String(input) === "3 2") {
                    if (towers[1][2] === level1One) {
                        if (towers[5][0] === "   8   ") {
                            towers[1][2] = "   4   "
                            towers[5][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][0] === level2One) {
                            towers[1][2] = "   8   "
                            towers[1][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level2One) {
                            towers[1][2] = "   8   "
                            towers[3][8] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[1][2] = "   8   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][2] === level1One) {
                        if (towers[5][1] === "   9   ") {
                            towers[3][2] = "   7   "
                            towers[5][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level2One) {
                            towers[3][2] = "   7   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[3][2] = "   7   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][2] === level1One) {
                        if (towers[5][1] === "   9   ") {
                            towers[5][2] = "   0   "
                            towers[5][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][1] === level2One) {
                            towers[5][2] = "   0   "
                            towers[1][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level2One) {
                            towers[5][2] = "   0   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[5][2] = "   0   "
                            towers[3][1] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][2] === level2One) {
                        if (towers[5][1] === "   9   ") {
                            towers[3][2] = "   7   "
                            towers[5][1] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[3][2] = "   7   "
                            towers[3][1] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][2] === level2One) {
                        if (towers[5][1] === "   9   ") {
                            towers[5][2] = "   0   "
                            towers[5][1] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][1] === level3One) {
                            towers[5][2] = "   0   "
                            towers[3][1] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][2] === level3One) {
                        if (towers[5][1] === "   9   ") {
                            towers[5][2] = "   0   "
                            towers[5][1] = level3One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    }
                } else if (String(input) === "2 1") {
                    if (towers[1][2] === level1One) {
                        if (towers[5][0] === "   8   ") {
                            towers[1][2] = "   4   "
                            towers[5][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][0] === level2One) {
                            towers[1][2] = "   8   "
                            towers[1][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level2One) {
                            towers[1][2] = "   8   "
                            towers[3][8] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[1][2] = "   8   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][1] === level1One) {
                        if (towers[5][0] === "   8   ") {
                            towers[3][1] = "   6   "
                            towers[5][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level2One) {
                            towers[3][1] = "   6   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[3][1] = "   6   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][1] === level1One) {
                        if (towers[5][0] === "   8   ") {
                            towers[5][1] = "   9   "
                            towers[5][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][0] === level2One) {
                            towers[5][1] = "   9   "
                            towers[1][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level2One) {
                            towers[5][1] = "   9   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[5][1] = "   9   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][1] === level2One) {
                        if (towers[5][0] === "   8   ") {
                            towers[3][1] = "   6   "
                            towers[5][0] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[3][1] = "   6   "
                            towers[3][0] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][1] === level2One) {
                        if (towers[5][0] === "   8   ") {
                            towers[5][1] = "   9   "
                            towers[5][0] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One && towers[3][0] === "   5   ") {
                            towers[5][1] = "   9   "
                            towers[3][0] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][1] === level3One) {
                        if (towers[5][0] === "   8   ") {
                            towers[5][1] = "   9   "
                            towers[5][0] = level3One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    }
                } else if (String(input) === "2 3") {
                    if (towers[1][2] === level1One) {
                        if (towers[5][0] === "   8   ") {
                            towers[1][2] = "   4   "
                            towers[5][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][0] === level2One) {
                            towers[1][2] = "   8   "
                            towers[1][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level2One) {
                            towers[1][2] = "   8   "
                            towers[3][8] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][0] === level3One) {
                            towers[1][2] = "   8   "
                            towers[3][0] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][1] === level1One) {
                        if (towers[5][2] === "   0   ") {
                            towers[3][1] = "   6   "
                            towers[5][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level2One) {
                            towers[3][1] = "   6   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One) {
                            towers[3][1] = "   6   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][1] === level1One) {
                        if (towers[5][2] === "   0   ") {
                            towers[5][1] = "   9   "
                            towers[5][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[3][2] === level2One) {
                            towers[5][1] = "   9   "
                            towers[1][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level2One) {
                            towers[5][1] = "   9   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One) {
                            towers[5][1] = "   9   "
                            towers[3][2] = level1One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[3][1] === level2One) {
                        if (towers[5][2] === "   0   ") {
                            towers[3][1] = "   6   "
                            towers[5][2] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One) {
                            towers[3][1] = "   6   "
                            towers[3][2] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][1] === level2One) {
                        if (towers[5][2] === "   0   ") {
                            towers[5][1] = "   9   "
                            towers[5][2] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else if (towers[5][2] === level3One && towers[3][2] === "   7   ") {
                            towers[5][1] = "   9   "
                            towers[3][2] = level2One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    } else if (towers[5][1] === level3One) {
                        if (towers[5][2] === "   0   ") {
                            towers[5][1] = "   9   "
                            towers[5][2] = level3One
                            towers = towers
                            console.clear()
                            console.log(towers)
                        } else {
                            console.clear()
                            console.log(`That move cannot be made.`)
                            console.log(towers)
                        }
                    }
                }
            })
        }
        //I wasn't kidding.
        let towerStart = function () {
            towers[1][0] = level1One //2
            towers[3][0] = level2One //5
            towers[5][0] = level3One //8
            console.clear()
            console.log(towers)
            onTowerChange()
        }
        //Here is the tower array. The blocks are represented by numbers to make them interchangable in the code easier.
        let towers = [
            ["   |   ", "   |   ", "   |   "],
            ["   2   ", "   3   ", "   4   "],
            ["   |   ", "   |   ", "   |   "],
            ["   5   ", "   6   ", "   7   "],
            ["   |   ", "   |   ", "   |   "],
            ["   8   ", "   9   ", "   0   "],
        ]
        towerStart()
    })
}
//Here is the digital clock function.
let time = function () {
    rl.question(`Howdy! So today there isn't a game, but it sure as hell took as long as one. It's a dynamic digital clock that wouldn't be hard to do, but when doing it with text art numbers it was :'). All it does is shows the time so when you are done with it press Ctrl + C to break out of it and reload the file by typing node ily2.js. This is because it is constantly refreshing itself to match the correct second of the time and I can't do anything to put you back in main because of it looping.
    
    
Press enter to continue...`, (answer) => {
        console.clear()
        rl.question(`Because of the reasoning above you can have your message and pic now
    
Pic:

Message:

Press enter to continue...`, (answer) => {
            clock()
        })
    })
}
//All these are the text are number variables. Take note how they are more than one line.
let time0 = `
 a8888a  
d8' ..8b 
88 .P 88 
88 d' 88 
Y8'' .8P 
 Y8888P`
let time1 = `
d88  
 88  
 88  
 88  
 88  
d88P`
let time2 = `
d8888b. 
    '88 
.aaadP' 
88'     
88.     
Y88888P`
let time3 = `
d8888b. 
    '88 
 aaad8' 
    '88 
    .88 
d88888P`
let time4 = `
dP   dP 
88   88 
88aaa88 
     88 
     88 
     dP`
let time5 = `
888888P 
88'     
88baaa. 
    '88 
     88 
d88888P`
let time6 = `
.d8888P 
88'     
88baaa. 
88' '88 
8b. .d8 
'Y888P'`
let time7 = `
d88888P 
    d8' 
   d8'  
  d8'   
 d8'    
d8'`
let time8 = `
.d888b. 
Y8' '8P 
d8bad8b 
88' '88 
8b. .88 
Y88888P`
let time9 = ` 
.d888b. 
Y8' '88 
'8bad88 
    '88 
d.  .88 
'8888P`
let timeColon = `
dP 
88 
   
   
dP 
88`

let timeAM =
    `
.d8888b. 88d8b.d8b. 
88'  '88 88''88''88 
88.  .88 88  88  88 
'88888P8 dP  dP  dP 
`
let timePM =
    `                   
88d888b. 88d8b.d8b. 
88'  '88 88''88''88 
88.  .88 88  88  88 
88Y888P' dP  dP  dP 
88                  
dP 
`
let clock = function () {
    //This here calculates the time using Javascripts built in functions. As of right now I'm writing these on day 10 and I still don't know how timezones will work with this...
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = timeAM;
    //Here is it makes all number two digits if need be.  
    if (h == 0) {
        h = 12;
    }
    //Same here   
    if (h > 12) {
        h = h - 12;
        session = timePM;
    }
    //These are short handed if statements. These are the exact same as the code above, just written differently.
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    //I would love to take full credit for this block of code, but I could not. This is very advanced code using Regular expressions. I needed help from friends with this one. I checks to see how big dimention-wise of the text art numbers because they are multi-line. This makes them display by eachother. Without this, they would display on top of eachother.
    function joinPatterns(...args) {
        const patterns = args.map(pat => pat.split(/[\n\r]+/));
        const widths = patterns.map(lines => Math.max(...lines.map(line => line.length)));
        const length = Math.max(...patterns.map(lines => lines.length));
        return Array.from({
                length
            }, (_, i) =>
            patterns.map((lines, j) => (lines[i] || "").padEnd(widths[j], " ")).join(" ")
        ).join("\n");
    }
    //These transform the numbers into the text art ones.
    let sArray = String(s).split("")
    if (sArray[0] === "0") {
        sdigit1 = time0
    }
    if (sArray[0] === "1") {
        sdigit1 = time1
    }
    if (sArray[0] === "2") {
        sdigit1 = time2
    }
    if (sArray[0] === "3") {
        sdigit1 = time3
    }
    if (sArray[0] === "4") {
        sdigit1 = time4
    }
    if (sArray[0] === "5") {
        sdigit1 = time4
    }
    if (sArray[1] === "0") {
        sdigit2 = time0
    }
    if (sArray[1] === "1") {
        sdigit2 = time1
    }
    if (sArray[1] === "2") {
        sdigit2 = time2
    }
    if (sArray[1] === "3") {
        sdigit2 = time3
    }
    if (sArray[1] === "4") {
        sdigit2 = time4
    }
    if (sArray[1] === "5") {
        sdigit2 = time5
    }
    if (sArray[1] === "6") {
        sdigit2 = time6
    }
    if (sArray[1] === "7") {
        sdigit2 = time7
    }
    if (sArray[1] === "8") {
        sdigit2 = time8
    }
    if (sArray[1] === "9") {
        sdigit2 = time9
    }
    let mArray = String(m).split("")
    if (mArray[0] === "0") {
        mdigit1 = time0
    }
    if (mArray[0] === "1") {
        mdigit1 = time1
    }
    if (mArray[0] === "2") {
        mdigit1 = time2
    }
    if (mArray[0] === "3") {
        mdigit1 = time3
    }
    if (mArray[0] === "4") {
        mdigit1 = time4
    }
    if (mArray[0] === "5") {
        mdigit1 = time4
    }
    if (mArray[1] === "0") {
        mdigit2 = time0
    }
    if (mArray[1] === "1") {
        mdigit2 = time1
    }
    if (mArray[1] === "2") {
        mdigit2 = time2
    }
    if (mArray[1] === "3") {
        mdigit2 = time3
    }
    if (mArray[1] === "4") {
        mdigit2 = time4
    }
    if (mArray[1] === "5") {
        mdigit2 = time5
    }
    if (mArray[1] === "6") {
        mdigit2 = time6
    }
    if (mArray[1] === "7") {
        mdigit2 = time7
    }
    if (mArray[1] === "8") {
        mdigit2 = time8
    }
    if (mArray[1] === "9") {
        mdigit2 = time9
    }
    let hArray = String(h).split("")
    if (hArray[0] === "0") {
        digit1 = time0
    }
    if (hArray[0] === "1") {
        digit1 = time1
    }
    if (hArray[1] === "0") {
        digit2 = time0
    }
    if (hArray[1] === "1") {
        digit2 = time1
    }
    if (hArray[1] === "2") {
        digit2 = time2
    }
    if (hArray[1] === "3") {
        digit2 = time3
    }
    if (hArray[1] === "4") {
        digit2 = time4
    }
    if (hArray[1] === "5") {
        digit2 = time5
    }
    if (hArray[1] === "6") {
        digit2 = time6
    }
    if (hArray[1] === "7") {
        digit2 = time7
    }
    if (hArray[1] === "8") {
        digit2 = time8
    }
    if (hArray[1] === "9") {
        digit2 = time9
    }
    const res = joinPatterns(digit1, digit2, timeColon, mdigit1, mdigit2, timeColon, sdigit1, sdigit2, session);

    console.clear()
    console.log(res);
    setTimeout(clock, 1000);

}
//This is the start of the random pickup lines. You can look though all of these if you want, but there are a lot. I did my research.
let randPickupLine = [`How about a fuck.... ing drink?`, `Unlike pac-man I dont just eat cherries, I pop them`, `Just where do those legs of yours end?`, `Fuck me if I am wrong, but you want to screw me, don't you?`, `I'm not really this tall, I'm just sitting on my wallet.`, `Roses are black, violets are red, what is it going to take, to get you into bed?`, `Is that a fox on your shoulder, or am I seeing double?`, `If you play your cards right, i just might let you see me naked`, `If I were a stop light, I'd turn red everytime you passed by, just so I could stare at you a bit longer.`, `Sex is a killer.. want to die happy?`, `I think that pick up lines are for people with to much time on their hands. Let's just fuck.`, `Didn't anyone tell you that you wanted to sleep with me? I thought you knew.`, `Hey baby, you must be a light switch, cuz every time I see you, you turn me on!`, `Scientists call me a medical miracle.`, `Was your father a thief? 'Cause someone stole the stars from the sky and put them in your eyes.`, `I want you to have my children! (This isn't a pickup line wtf)`, `Hello. I have sex on the first date. Do you?`, `Come live in my heart, and pay no rent.`, `Excuse me. Do you want to fuck or should I apologize?`, `I think that pick up lines are for people with to much time on their hands. Let's just fuck.`, `Way to go God!!! (this one is funny)`, `Wanna Wrestle??`, `What do you say we go back to my room and do some math: Add a bed, subtract our clothes, divide your legs, and multiply.`, `Your parents must be retarded, 'cuz you seem like a special girl to me :)`, `If I told you I was gay, would you let me touch you?`, `I'll suck you so hard that you'll have to pick the sheets out of your ass when I'm finished.`, `You know I'd like to invite you over, but I'm afraid you're so hot you'll skyrocket my air-conditioning bill.`, `Are you a Pokemon? 'Cause i wanna take a peek a'ch you`, `You have such a nice ass that I would drag my dick through a mile of broken glass just to hear you fart through a walkie talkie.`, `Your eyes are the same color as my Porshe.`, `You are a 9.9999. You'd be a perfect 10 if you were with me.`, `I'd marry your cat just to get in the family.`, `Why is it that every time you are around, my pants feel tighter?`, `You must work at a lumberyard because you've been giving me wood all day.`, `Sex is evil; Evil is sin; Sin is forgiven; so let's begin.`, `Hey, you wanna play Lion? [What's that?] You lie on your back and roar while i throw you the meat.`, `If I knew how hot you were I would have grabbed your ass instead of bumping into you.`, `Please, I'm wearing underwear older than you.`, `Do you have a name or can I call you mine?`, `Let's go to my place and do the things I'll tell everyone we did anyway.`, `Do you have a boyfriend? [Yes] Is he nice? [Yes] Good, then he can find someone else.`, `Fat penguin. [What?] Sorry. I just wanted to say something that would break the ice.`, `I hope you know CPR, cuz you take my breath away!`, `I'm like a Rubik's cube; the more you play with me, the harder I get.`, `Hey babe, wanna get LUCKY!?`, `Show me your pussy and you will get some popcorn!`, `I'm bigger and better than the Titanic.. only 200 woman went down on the Titanic.`, `Stand back, I'm a doctor. You go get an ambulance, I'll loosen her clothes.`, `Is it that cold out or are you just smuggling tic-tac's`, `I've lost my teddy bear, can I sleep with you instead?`, `What's that on your face? Oh, must just be beauty. Here, let me get it off. Hey, it's not coming off!`, `Of course theres lots of fish in the sea, but youre the only one Id love to catch and mount back at my place.`, `Are you a vendor, because I'd like to browse your goods.`, `Are you a general? Cuz my private's standing at attention.`, `The doctor said I broke the record for the world's most powerful penis. Do you want to see me work my magic?`, `You're ugly but you intrigue me.`, `What does it feel like to be the most beautiful girl in this room?`, `If you need a love doctor, I have a medicated degree..`, `Are you a bird collector? 'Cause you've got a nice set of hooters.`, `My name is not Fred Flinstone but i can make your bed rock`, `There's this movie I wanted to see and my mom said I couldn't go by myself..`, `Hey baby, you've got somthing on your butt, my eyes.`, `Hi. I'm gay, think you can convert me?`, `I just wanted to show this rose how incredibly beautiful you are.`]
//Here is how it randomly generates one. It take a random number from the size of the array above.
let randomline = Math.floor(Math.random() * randPickupLine.length)
let lineStart = function () {
    rl.on('line', (input) => {
        if (String(input).toLowerCase() === "stop") {
            rl.question(`I hope you enjoyed lmao
    
Picccy: https://i.redd.it/mxv0gx0kp01z.jpg

Messag: Yo yo yo. This one was fun to make hehe. Anyway I will talk about one thing that wont be happening this time. We wanted to make a basic artificial intelligence program, but we need to neural networking among other things so maybe next time. I did absolutely nothing today lel. I have work tomorrow so that's always good. I didn't talk to much again, but thats ok. I just wanted to let you know I love searching for the salad pics. I'm also sorry there isn't much to write about today because I didn't talk to you ;-;. Orite I'ma sleep and think about how I'll do tomorrow's project. Goobnite.

Press enter to continue...`, (answer) => {
                main()
            })
        } else {
            let randomline = Math.floor(Math.random() * randPickupLine.length)
            console.clear()
            console.log(randPickupLine[randomline])
        }
    })
}
let pickup = function () {
    rl.question(`Today's event is probably my greatest work. It is a random pickup line generator, but I want to give a quick tiny, little disclaimer. I did not come up with these so some are DRIPPING in tea so good luck with this one. Press enter to go through them or type stop to stop.
    
    
Press enter to continue...`, (answer) => {
        console.log(randPickupLine[randomline])
        lineStart()
    })
}
//This is the start of the zalgo text generator.
let zalgo = function () {
    rl.question(`Hai so today I have ths sorta text generator thingy. This already exists, but I wanted to replicate it. So it's a "Zalgo" text generator. If you don't know what it is, it takes a sentence or word: Hi. and turns it into: ${colors.zalgo(`Hi`)}. It is different everytime and the letters may appear on top of eachother. If you wanna mess around with it, just type in a word or phrase to see it change. To stop just type stop


Press enter to continue...`, (answer) => {
        textGenerator()
    })
}
//This is the where it gets transformed.
let textGenerator = function () {
    console.log(`Type below`.zalgo)
    rl.on('line', (input) => {
        console.log(input.zalgo)
        if (String(input).toLowerCase() === 'stop') {
            rl.question(`I thought that was a cool little project for today.

Piccture: https://i.pinimg.com/originals/31/36/53/313653a6b62458d54794b4c835b652ef.jpg

Messege: Heyyyyy. How it do. This one was pretty fun. I mentioned AI again and we found a good role model for next time. There is a game called Event[0]. So basically it's a game about you being all alone in space, but there is an actual AI that is in the game and learns from what you tell it. It is the main focus of the game and changes depending on how you talk to it. It is sorta like an advanced chat bot. What really got me interested, was that the AI created its own ending for certain players that the developer specifically coded not to happen. Calling the AI your friend made it actually feel comfortable enough to make its own ending. Anyways how are you lel. I miss you I hope we can FaceTime soon. I was thinking about this while eating ramen yesterday: I hope the first message didn't come off salty, but after rereading it it kinda did. I;m not going to change anything again so it is what it is. I'm struggling to keep up with this. I just want the projects to be good and for you to enjoy them. Anyway goodnight. Good luck on ur exam.

Press enter to continue...`, (answer) => {
                main()
            })
        }
    })
}
//This is the encoder. I followed a chart that told how to encrypt and decrypt this and made it automatic for your use. 
let encoder = function () {
    console.log(`Type your message below

`)
    let changedArray = []
    rl.on('line', (input) => {
        let changer = Array.from(String(input))
        if (String(input.toLowerCase()) === 'stop') {
            main()
        } else {
            //this is where the letters are changed around.
            changer.forEach(function (element) {
                if (String(element) === "a" || String(element) === "A") {
                    changedArray.push("n")
                } else if (String(element) === "b" || String(element) === "B") {
                    changedArray.push("o")
                } else if (String(element) === "c" || String(element) === "C") {
                    changedArray.push("p")
                } else if (String(element) === "d" || String(element) === "D") {
                    changedArray.push("q")
                } else if (String(element) === "e" || String(element) === "E") {
                    changedArray.push("r")
                } else if (String(element) === "f" || String(element) === "F") {
                    changedArray.push("s")
                } else if (String(element) === "g" || String(element) === "G") {
                    changedArray.push("t")
                } else if (String(element) === "h" || String(element) === "H") {
                    changedArray.push("u")
                } else if (String(element) === "i" || String(element) === "I") {
                    changedArray.push("v")
                } else if (String(element) === "j" || String(element) === "J") {
                    changedArray.push("w")
                } else if (String(element) === "k" || String(element) === "K") {
                    changedArray.push("x")
                } else if (String(element) === "l" || String(element) === "L") {
                    changedArray.push("y")
                } else if (String(element) === "m" || String(element) === "M") {
                    changedArray.push("z")
                } else if (String(element) === "n" || String(element) === "N") {
                    changedArray.push("a")
                } else if (String(element) === "o" || String(element) === "O") {
                    changedArray.push("b")
                } else if (String(element) === "p" || String(element) === "P") {
                    changedArray.push("c")
                } else if (String(element) === "q" || String(element) === "Q") {
                    changedArray.push("d")
                } else if (String(element) === "r" || String(element) === "R") {
                    changedArray.push("e")
                } else if (String(element) === "s" || String(element) === "S") {
                    changedArray.push("f")
                } else if (String(element) === "t" || String(element) === "T") {
                    changedArray.push("g")
                } else if (String(element) === "u" || String(element) === "U") {
                    changedArray.push("h")
                } else if (String(element) === "v" || String(element) === "V") {
                    changedArray.push("i")
                } else if (String(element) === "w" || String(element) === "W") {
                    changedArray.push("j")
                } else if (String(element) === "x" || String(element) === "X") {
                    changedArray.push("k")
                } else if (String(element) === "y" || String(element) === "Y") {
                    changedArray.push("l")
                } else if (String(element) === "z" || String(element) === "Z") {
                    changedArray.push("m")
                } else if (String(element) === ".") {
                    changedArray.push(".")
                } else if (String(element) === ",") {
                    changedArray.push(",")
                } else if (String(element) === ":") {
                    changedArray.push(":")
                } else if (String(element) === ".") {
                    changedArray.push(";")
                } else if (String(element) === "(") {
                    changedArray.push("(")
                } else if (String(element) === ")") {
                    changedArray.push(")")
                } else if (String(element) === "8") {
                    changedArray.push("⠀")
                } else {
                    console.log(`Invalid character, letters only.`)
                }
            });
            let str = changedArray.toString()
            console.clear()
            //I had to use a regular expression to cut out all the commas becuase there would be one in between every letter.
            console.log(str.replace(/[, ]+/g, "").trim())
            changedArray = []
        }
    })
}
let caesar = function () {
    rl.question(`Today's thingy is a Caesar cipher encoder/decoder. I don't know how to explain how it works, but if you google it, it will show you a chart of how the letters change. So I'm going to give you your message now and you have to decode it to read it. Also while in the event you can type stuff to encode it to see how it works. If you want the encoded message to have a space, type an 8 where ever that space is supposed to be.
    
Picture: This is a red salad https://pbs.twimg.com/profile_images/621501339210764288/WK2CsA-Q.jpg

Message: uv8v8gubhtug8guvf8jbhyq8or8pbby8naq8vg8jnf8sha8gb8znxr.8naljnl8v8whfg8jnagrq8gb8fnl8gung8v8jnf8cebhq8bs8lbh8gung8lbh8tbg8lbhe8wbo.8lbh8frrzrq8ernyyl8unccl8nobhg8vg8naq8v8qvqag8jnag8gb8znxr8yvxr8n8znffvir8qrny8nobhg8vg8ohg8v8nz8cebhq8naq8jnf8irel8unccl8gb8frr8lbh8unccl8nobhg8vg.8v8ubcr8vg8nyy8tbrf8jryy8naq8lbh8svaq8gung8lbh8yvxr8vg8naq8znxr8gur8tbbq8pnfu8zbavrf.8v8nyfb8ubcr8lbh8qb8jryy8ba8lbhe8frpbaq8grfg8gbzbeebj.8vz8bss8gbzbeebj8fb8v8ubcr8znlor8jr8pna8gnyx8zber8fb8vz8rkpvgrq.8v8jvfu8v8pbhyq8tb8ohl8puvpxra8sebz8lbh8ohg8vyy8frggyr8sbe8gur8puvp8svy8n8sbe8abj.


Press enter to continue...`, (answer) => {
        encoder()
    })
}
let thisIsIt = function () {
    let heart1 = function () {
        console.log(`        
              ******       ******
            **********   **********
          ************* *************
         *****************************
         *****************************
         *****************************
          ***************************
            ***********************
              *******************
                ***************
                  ***********
                    *******
                      ***
                       *

        I do it for you because I really like you and this is all i can do for you here. I wish I can do more I just want to be good enough from here. I don't know if there is anyone better. I wanted to you to know I will wait and I wont find anyone else, but I dont expect the same from you. If you find someone else, it's not that I would be ok with it, it's that I want you to be happy. I know you wont see this, but I really miss you and I think about seeing you every day. I couldn't tell you this because I just don't know where to fit it and I don't want to lose you, even if it means just being your friend. Either way, I'll wait. I hope you still like me in that time. I know I will. ily
            
        Haha it is still super weird to read these back. I still feel the same for the most part, but one thing I didn't say while writing this line was that I was upset. Not sure about what, but I was. You can tell by reading it. I do really like this line.`)
    }
    let heart2 = function () {
        console.log(`       
                @@@@@@           @@@@@@
              @@@@@@@@@@       @@@@@@@@@@
            @@@@@@@@@@@@@@   @@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@
         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
           @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
              @@@@@@@@@@@@@@@@@@@@@@@@@@@
                @@@@@@@@@@@@@@@@@@@@@@@
                  @@@@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@
                      @@@@@@@@@@@
                        @@@@@@@
                          @@@
                           @

        I do it for you because I really like you and this is all i can do for you here. I wish I can do more I just want to be good enough from here. I don't know if there is anyone better. I wanted to you to know I will wait and I wont find anyone else, but I dont expect the same from you. If you find someone else, it's not that I would be ok with it, it's that I want you to be happy. I know you wont see this, but I really miss you and I think about seeing you every day. I couldn't tell you this because I just don't know where to fit it and I don't want to lose you, even if it means just being your friend. Either way, I'll wait. I hope you still like me in that time. I know I will. ily
            
        Haha it is still super weird to read these back. I still feel the same for the most part, but one thing I didn't say while writing this line was that I was upset. Not sure about what, but I was. You can tell by reading it. I do really like this line.`)
    }

    rl.question(`Press enter to start`, (answer) => {

        setTimeout(heart1, 2000)
        setTimeout(clear, 4000)
        setTimeout(heart2, 4000)
        setTimeout(clear, 6000)
        setTimeout(heart1, 6000)
        setTimeout(clear, 8000)
        setTimeout(heart2, 8000)
        setTimeout(clear, 10000)
        setTimeout(heart1, 10000)
        setTimeout(clear, 12000)
        setTimeout(heart2, 12000)
        setTimeout(clear, 14000)
        setTimeout(heart1, 14000)
        setTimeout(clear, 16000)
        setTimeout(heart2, 16000)
        rl.question(" ", (answer) => {
            console.log(`     

    ()=()  <3  
    ('Y') 
    q . p
    ()_()

    The thing that truly bothers me about my friends relationship is that he can have that relationship and see her. (I still dont agree with what they do, but I am happy for them). I wish I could see you. Friend or Girlfriend it would be amazing either way. I know it will be awhile, but I can still wish it was now. I really hope Thommo doesn't find these. Or you now that I shared them. That would be a rip for me. Your timezone is big gay i wish i could talk you more lol. 
            
    Yes it still does. Sean's life is revolved around his girlfriend so he is constantly talking about her. He asked about you again yesterday. It doesn't bother as much at this point, but it is slightly dissapointing. I still think about you at school all the time.`)
            rl.question(" ", (answer) => {
                console.log(`
        {~._.~} 
        _( Y )_ 
       (:_~*~_:)
        (_)-(_) 
        
        I'm lucky weow. I hope you would call me out if I'm being and idiot. Don't let me mess it up. I'm still gonna be me, but I'm dumb sometimes. So I hope you would forgive me. I'll always make it up. 
        
        These are really hard to re-read. I sound like a distressed teen girl on her snapchat story. Anyway I have come to the realization that I possibly can't mess it up.`)
                rl.question(" ", (answer) => {
                    console.log(`
        ██████████
        █░░░░░░░░█
        █░██░░██░█
        █░░░██░░░█
        █░░████░░█
        █░░█░░█░░█
        █░░░░░░░░█
        ██████████
        ──█░░░░█
        ──█░░░░█
        ──█░░░░█
        ──█░░░░█
        ──█░░░░█
        ──█░░░░█
        ██████████
        █░░░██░░░█
        █░░░██░░░█
        █▄█▄██▄█▄█

        I'm going to learn how to make plugins soon. I want to so you don't have to. I want to see you succeed, but I want to succeed with you :). That's why I want to help you.

        I never did learn how to make plugins because you left the server. I was lowkey upset about you leaving because I really did want to make that server big with you, but I completely understand why you left and I don't blame you. That's why I wouldn't tell you that. This line still stands though.
        `)
                    rl.question(" ", (answer) => {
                        console.log(`
              _     
            >(.)__ 
             (___/
                
            Suck a Duck.
            
            Yes.`)
                        rl.question(" ", (answer) => {
                            console.log(`⠀⠀⠀⠀⠀⠀⠀⠀⠀
                          ⣤⣤
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿
                ⠀⠀⣶⠀⠀⣀⣤⣶⣤⣉⣿⣿⣤⣀
                ⠤⣤⣿⣤⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣀
                ⠀⠛⠿⠀⠀⠀⠀⠉⣿⣿⣿⣿⣿⠉⠛⠿⣿⣤
                ⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⠛⠀⠀⠀⣶⠿
                ⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⣿⣿⣤⠀⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠿⣿⣿⣿⣿⣿⠿⠉⠉
                ⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠉
                ⠀⠀⠀⠀⠀⠀⠀⠀⣛⣿⣭⣶⣀
                ⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠉⠛⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣉⠀⣶⠿
                ⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⠿
                ⠀⠀⠀⠀⠀⠀⠀⠛⠿⠛
                        
                One day we will get that EPIC VICTORY ROYALE.
                
                Oh man we got plenty. I can't wait to get some more ;;;;;))))`)
                            rl.question(" ", (answer) => {
                                console.log(`
                        ________
                    _jgN########Ngg_
                  _N##N@@""  ""9NN##Np_
                 d###P            N####p
                 "^^"              T####
                                   d###P
                                _g###@F
                             _gN##@P
                           gN###F"
                          d###F
                         0###F
                         0###F
                         0###F
                         "NN@'
            
                          ___
                         q###r
                          ""
                          
                        I'll tell you one day about these one day :P
                        
                        Sure did fam.`)
                                rl.question(' ', (answer) => {
                                    console.log(`
                                _
                            _n_|_|_,_
                           |===.-.===|
                           |  ((_))  |
                           '==='-'==='
                           
                           I wish I could call you or facetime you this weekend, but atleast i can message you :)
                           
                           Yes facetiming is like my favorite thing ever. I might not seem always so excited, but I am.`)
                                    rl.question(' ', (answer) => {
                                        console.log(`
                               	
                        ,d88b.d88b,
                        88888888888
                        'Y8888888Y'
                          'Y888Y'
                            'Y'
                            
                            I love you more you salad
                            
                            Big truth.`)
                                        rl.question(' ', (answer) => {
                                            console.log(`
                                            .''~~~~~~~~~~~''.
                                            (  .'11 12 1'.  )
                                            |  :10 \|   2:  |
                                            |  :9   @   3:  |
                                            |  :8       4;  |
                                            '. '..7 6 5..' .'
                                             ~-------------~  
                                             
                                             I wake up early because if I don't I feel I lose time. I don't have a lot and I just want to spend it with you. I did before you, now I just have someone to do it for and someone to look foward to.
                                             
                                             I will be honest I don't get up as early anymore, but this ideal for me probably wont ever change. This is true though, I would rather spend my time with you.`)
                                            rl.question(' ', (answer) => {
                                                console.log(`
                                                 (i couldn't think of a picture for this one here is a sticc figure)
                                                 (made it myself)
                                                        O
                                                      --|--                                                      
                                                      _| |_
                                                      
                                                      Today started out terribly ngl. I woke up with my mom screaming at me until I left for school. I was upset so I think the anxiety and nervousness made my stomach upset and of course today I was on the bus. It hurt a lot, but I was happy to hear you were having a good day.
                                                      
                                                      Yes these days are the worst. They need to install a toilet on the bus. My sticc figure has thicc ass thys.`)
                                                rl.question(` `, (answer) => {
                                                    console.log(`
                                                            ''              ''      
                                                          '--..--.        ---..--'   
                                                         --'     .:'    ':.     '--  
                                                        --        ':   ':'        -. 
                                                       ':''.'      --  -.'.'      '/ 
                                                       .o/+mmh:    ':  ++:ymdo'    -.
                                                       :myhNNmd.   '/  hhsmNNds    --
                                                       -dNNNNdy.   ':  ymNNNNy+    -.
                                                       'osyyo/.    --  :oyys+:    '/ 
                                                        .-'       .:    :'       '-. 
                                                         --'     .:'    ':.     ':.  
                                                          '------.        .------'   
                                                              '              '    
                                                              
                                                              I was a bit off today I'm sorry 😅. Also sorry for not saying ily when you went to bed. I just enjoy saying it, so you know I care. I mean I know you know I care it's just weird idk sksksk.
                                                              
                                                              I have no clue what I was talking about, but yes. I would like to remind you these were written anywhere from 9:00 p.m to 3:00 a.m. lmao. So some shady shit was probably going on.`)
                                                    rl.question(' ', (answer) => {
                                                        console.log(`
                                                                   iiiiiiiiii
                                                                  |:H:a:p:p:y:|
                                                                __|___________|__
                                                               |^^^^^^^^^^^^^^^^^|
                                                               |:B:i:r:t:h:d:a:y:|
                                                               |                 |
                                                               ~~~~~~~~~~~~~~~~~~~
                                                            
                                                               I have decided to show you these for ur birthday since you wont LeT mE gEt YoU sOmEtHiNg

                                                               Yea you loaf big meanie. I hope you had a good birthday. I didn't tell you about this so now you can't say no.
                                                            `)
                                                        rl.question(' ', (answer) => {
                                                            console.log(`
                                                                ⠀⠀⣀
                                                                ⠀⠿⣿⣿⣀
                                                                ⠀⠉⣿⣿⣀
                                                                ⠀⠀⠛⣿⣭⣀⣀⣤
                                                                ⠀⠀⣿⣿⣿⣿⣿⠛⠿⣶⣀
                                                                ⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⣉⣶
                                                                ⠀⠀⠉⣿⣿⣿⣿⣀⠀⠀⣿⠉
                                                                ⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿
                                                                ⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⠿
                                                                ⠀⣿⣿⣿⠿⠉⣿⣿⣿⣿
                                                                ⠀⣿⣿⠿⠀⠀⣿⣿⣿⣿
                                                                ⣶⣿⣿⠀⠀⠀⠀⣿⣿⣿
                                                                ⠛⣿⣿⣀⠀⠀⠀⣿⣿⣿⣿⣶⣀
                                                                ⠀⣿⣿⠉⠀⠀⠀⠉⠉⠉⠛⠛⠿⣿⣶
                                                                ⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿
                                                                ⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉
                                                                ⣀⣶⣿⠛
                                                                    
                                                                I gave you the HiNT big mean. It's this. Idk what it is but its this :). I hope you at least enjoy it a bit. Also don't be scared smh. This is scarier for me than you loaf.
                                                                
                                                                I just straight up told you this time. I am still scared, but for a different reason. I'm hoping these games and other things don't suck.`)

                                                            rl.question(' ', (question) => {
                                                                console.log(`
                                                            https://images-ext-1.discordapp.net/external/RfKLC9SpJGMIvSo2Mu4qqBqZF5ECWrTzT0wSjnrI-xk/https/cdn.discordapp.com/attachments/485219927972773893/531629840051208195/unknown.png
                                                            
                                                            So you know when you told me to delete the one picture. Technically i did, but its still in my possession... It's cute pls lemme keep it :)))))))
                                                            
                                                            Yea I still have it. It is too hot to delete.`)
                                                                rl.question(' ', (question) => {
                                                                    console.log(`
                                                                  _____        _
                                                                d8888888b.   d888b   ,db
                                                               d888888888888888888888888.*
                                                              888888 88888888888 88 8888888o
                                                              8888888 888888888 8888 8888'~~  
                                                              8888888 888888888 88888
                                                               888888 8888888888 8888
                                                              ## 88888  88888 ##  8888
                                                             #### 88888      ###   8888
                                                            ###,,, 888,,,    ##,,,  88,,,
                                                            
                                                            I literally never had been so happy that i joined a MINECRAFT SERVER. I used to think it was so dumb, but it has been so worth it. The people have been v cool. Especially you. You were my block placing buddy. :)
                                                            
                                                            Yea in a way I do miss Guardian Skies. It started a lot of things for me. No one really lasted other than you though which is sad. A majority of the GS peeps are shady anyway.`)
                                                                    rl.question(` `, (question) => {
                                                                        console.log(`
                                                                 ____
                                                                |,--.|
                                                                ||__||
                                                                |+  o| 
                                                                |,'o | 
                                                                '----'
                                                                
                                                                Its literally 12:15 A.M and i got out of bed to type this because i was thinking about it. So I was watching a video on why that toby turner guy fell of youtube. I was curious because I used to watch his minecraft videos a while back. (Its whack to say that, but it's true.) I actually felt sorta bad for him becuase allegations that might not even have been true ruined his career and happiness. He had a real talent for a lot of things imo. I guess this goes into my time ideal think about I don't feel I have enough. I was thinking about when will i fall off. And it's werid. Not only that, but I want time because of right now, I don't really know why I do things. I just sorta do stuff. Idk how to explain it lmao. I dont understand why I want to play a game and get somewhere. I guess I haven't found that purpose. The only thing I understand why I do things is for you and others. I do this bot for you everyday to help you with the server. (i dont want to make seem like im forced lol I enjoy doing this for you and coding) I wanna do it for you because I dont know if others do stuff for you and ig I just want to be that person for you. Im going to bed it 12:30 rip me. gn salad gorl. This also shows that i was thinking of you like a massive duck succer. If you ask me to explain these, there is a good chance I will not be able to tell you because of me forgetting sksskskkskskskks.
                                                                
                                                                I thought about this one more. I think I shoot for things that don't matter because at this point that is the only thing I can achieve. I would love to be good at something like sports or something relevant. What I do now gets me nowhere and I don't talk to anyone what-so-ever. I don't care about falling off, especially when there is nothing to fall from.`)
                                                                        rl.question(` `, (question) => {
                                                                            console.log(`
                                                                    _
                                                                    (_)
                                                                     H                 _   _
                                                                     H                (o)_(o)                                  _
                                                                     H                ( ^_^ )                                 (_)
                                                                     H.---...__        ;---:                                   H
                                                                     H|        '-._   (_(.)_)                                  H
                                                                     H'.           '\ (O)_(O)                                  H
                                                                     H--=============+----------------------------------------.H
                                                                     H%%%%%%%%%%%%%%%|Z7Z7Z7i _ _ _ i*_*_*_*i|L|L|L|i@_@_@_@i/ H
                                                                     H%%%%%%%%%%%%%%%|######i%%%%%%%i @ @ @ i*******i&&&&&&&/'-H
                                                                     H---------------|######i%%%%%%%i@ @ @ @i*******i&&&&&&/ @ H
                                                                     H_______________|######i%%%%%%%i @ @ @ i*******i&&&&&/@  @H
                                                                     H               '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~''.@  H
                                                                     H                                                      '--H
                                                                    (_)                                                       (_)
                                                                    '-'                                                       '-'
                                                                    
                                                                    So like Im facetiming you rn and I'm p sure you feel asleep lmao. I'm not sure if I should stay or not. Anyway I'm really happy you facetimed me I had a really fun time. I wish my xbox didn't break or maybe we could of won. 
                                                                    
                                                                    Yea that was sad boy hours. I though fortnite broke my xbox.`)
                                                                            rl.question(' ', (question) => {
                                                                                console.log(`
                                                                        _..._  ,s$$$s.
                                                                        .$$$$$$$s$$ss$$$$,
                                                                        $$$sss$$$$s$$$$$$$
                                                                        $$ss$$$$$$$$$$$$$$
                                                                        '$$$s$$$$$$$$$$$$'
                                                                         '$$$$$$$$$$$$$$'
                                                                           S$$$$$$$$$$$'
                                                                            '$$$$$$$$$'
                                                                              '$$$$$'
                                                                               '$$$'
                                                                                 ;
                                                                                ;
                                                                                ;
                                                                                ',
                                                                                 ;
                                                                                ,'
                                                                                ;
                                                                                ',
                                                                                 ',
                                                                                  ;
                                                                                 '
                                                                                 Also today when we were facetiming I realized something. I always knew you were cute, but you are actually v beautiful, at least to me. I know you sometimes talk about how you look and stuff and that is fine, I mean you know more than me about yourself because it is you and your opinion should be greater than mine anyway. I thought I would tell you anyway. Im also super saltine that we couldnt get that last game of Fortnite in. WhY dId My XbOx FuCk Up ThEn 😩
                                                                                 
                                                                                 I always felt that way, I was just scared to say it.`)
                                                                                rl.question(' ', (answer) => {
                                                                                    console.log(`
                                                                                     ___                               ___                       ___
                                                                                     {~._.~}     ___          ___      {~._.~}        ___        {~._.~}
                                                                                     _( Y )_   {~._.~}      {~._.~}    _( Y )_      {~._.~}      _( Y )_
                                                                                    (:_~*~_:)  _( Y )_      _( Y )_   (:_~*~_:)     _( Y )_     (:_~*~_:)
                                                                                     (_)-(_)  (:_~*~_:)    (:_~*~_:)   (_)-(_)     (:_~*~_:)     (_)-(_)
                                                                                               (_)-(_)      (_)-(_)                 (_)-(_)   ___
                                                                             ___                                                            {~._.~}
                                                                           {~._.~}               dMMMMMMP dMMMMMP dMMMMb  dMMMMb  dMP dMP   _( Y )_
                                                                           _( Y )_      ___        dMP   dMP     dMP dMP dMP dMP dMP dMP   (:_~*~_:)
                                                                          (:_~*~_:)   {~._.~}     dMP   dMMMP   dMP dMP dMP dMP  VMMMMP     (_)-(_)
                                                                           (_)-(_)    _( Y )_    dMP   dMP     dMP dMP dMP dMP dA  dMP
                                                                                     (:_~*~_:)  dMP   dMMMMMP dMMMMP" dMMMMP"  VMMMP"             ___
                                                                                      (_)-(_)                                                   {~._.~}
                                                                                                                                     ___        _( Y )_
                                                                               ___       ___        dMMMMb  dMMMMMP .aMMMb  dMMMMb {~._.~}     (:_~*~_:)
                                                                             {~._.~}   {~._.~}     dMP dMP dMP     dMP dMP dMP dMP _( Y )_      (_)-(_)
                                                                             _( Y )_   _( Y )_    dMMMMP" dMMMP   dMMMMMP dMMMMP  (:_~*~_:)
                                                                            (:_~*~_:) (:_~*~_:)  dMP dMP dMP     dMP dMP dMP dMb   (_)-(_)
                                                                             (_)-(_)   (_)-(_)  dMMMMP" dMMMMMP dMP dMP dMP dMP         ___
                                                                                                                                      {~._.~}
                                                                                                                                      _( Y )_
                                                                                         ___        dMP  dMP dMP  dMP .aMMMMb        (:_~*~_:)
                                                                                       {~._.~}     dMP  dMP dMP  dMP dMP  dMP         (_)-(_)    ___
                                                                                       _( Y )_    dMMMMMMP dMP  dMP dMP cccc     ___           {~._.~}
                                                                              ___     (:_~*~_:)  dMP  dMP dMP  dMP dMP  dMP    {~._.~}         _( Y )_
                                                                            {~._.~}    (_)-(_)  dMP  dMP  VMMMMP"  VMMMMP"     _( Y )_        (:_~*~_:)
                                                                            _( Y )_                                           (:_~*~_:)        (_)-(_)
                                                                           (:_~*~_:)    ___                            ___     (_)-(_)   ___
                                                                            (_)-(_)   {~._.~}       ___              {~._.~}           {~._.~}
                                                                                      _( Y )_     {~._.~}            _( Y )_           _( Y )_
                                                                                     (:_~*~_:)    _( Y )_           (:_~*~_:)         (:_~*~_:)
                                                                                      (_)-(_)    (:_~*~_:)           (_)-(_)           (_)-(_)
                                                                                                  (_)-(_)
                                                                                                  
                                                                                                  When I see you, you are getting the phattest hug and you aren't allowed to leave ima just steal you hope you dont mind. I decided not to delete anything from this so rip me. I thought I would keep it how it was. That being said, there is no way I'm going to be present whilest you are reading this lmao. I'm just going to go and like come back when you are done sksksk. ItS hArD SoRrY. Also we facetimed again and it was v nice thank you.
                                                                                                  
                                                                                                  Yes this will happen in that order.`)
                                                                                    rl.question(` `, (question) => {
                                                                                        console.log(`
                                                                                                      .
                                                                                                      . .                     -:-             .  .  .
                                                                                                    .'.:,'.        .  .  .     ' .           . ; | / .
                                                                                                    .'.;.'.       ._. ! ._.       :          .__ :/__.
                                                                                                     ',:.'         ._;!/_.                     .';'.      . ' .
                                                                                                     ,'             . ! .        ,.,      ..======..       .:.
                                                                                                    ,                 .         ._!_.     ||::: : | .        ',
                                                                                             .====.,                  .           ;  .~.===: : : :|   ..===.
                                                                                             |.::'||      .=====.,    ..=======.~,   |"|: :|::::::|   ||:::|=====|
                                                                                          ___| :::|!__.,  |:::::|!_,   |: :: ::|"|l_l|"|:: |:;;:::|___!| ::|: : :|
                                                                                         |: :|::: |:: |!__|; :: |: |===::: :: :|"||_||"| : |: :: :|: : |:: |:::::|
                                                                                         |:::| _::|: :|:::|:===:|::|:::|:===F=:|"!/|\!"|::F|:====:|::_:|: :|::__:|
                                                                                         !_[]![_]_!_[]![]_!_[__]![]![_]![_][I_]!//_:_\\![]I![_][_]!_[_]![]_!_[__]!
                                                                                         -----------------------------------"---'''''''---"-----------------------
                                                                                         _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |= _ _:_ _ =| _ _ _ _ _ _ _ _ _ _ _ _
                                                                                                                             |=    :    =|                
                                                                                        _____________________________________L___________J________________________
                                                                                        --------------------------------------------------------------------------
                                                                                        
                                                                                        School is absolute shite because I ABOSoLUTLY MISS YOu. Its annoying so i wanna have a snow day because i wanna spend my day with you. Update i have no school YAYYYYYYYYYYYY. 
                                                                                        
                                                                                        I do miss you at school everyday, but I also miss having off of school lmao`)
                                                                                        rl.question(' ', (question) => {
                                                                                            console.log(`
                                                                                            👀

                                                                                            👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
                                                                                            
                                                                                            👀`)
                                                                                            rl.question(' ', (question) => {
                                                                                                console.log(`
                                                                                                  _
                                                                                                _|#|_
                                                                                               | (O) |
                                                                                                -----
                                                                                                
                                                                                                I enjoy talking to you a lot spancc you for facetiming me, I could do it forever tbh. I look forward to it everyday.
                                                                                                
                                                                                                Still could 👌`)
                                                                                                rl.question(' ', (question) => {
                                                                                                    console.log(`
                                                                                                    .ssSSSSss.
                                                                                                    .ER'      'AM.
                                                                                                  .ST'          'CS.
                                                                                                 .E'  .S.    .S.  'S.
                                                                                                .L'   SSS    SSS   'S.
                                                                                                S'    'S'    'S'    'S
                                                                                                S                    S
                                                                                                S                    S
                                                                                                S.  s.          .s   S
                                                                                                'S. '"s.      .s"'  S'
                                                                                                 'S.  '"ss..ss"'  .S'
                                                                                                  'SS.    ~~    .SS'
                                                                                                    'SS.      .SS'
                                                                                                      'SSssssSS'
                                                                                                      
                                                                                                      Yo Yo. I had a really good day :). I really hope this is everything you expected. I also hope it is more too sksksks. I want to say a lot of stuffs but ima save most of it for the 12th ;)))). Ur so weird, but if it makes you feel better im weird too and i stan. It is v nice to have someone to smile with everyday. ily gn.
                                                                                                      
                                                                                                      It is very nice. Not everyone can say that.`)
                                                                                                    rl.question(` `, (question) => {
                                                                                                        console.log(`
                                                                                                            __   _
                                                                                                          _(  )_( )_
                                                                                                         (_   _    _)
                                                                                                           (_) (__)
                                                                                                           (this is a cloud)
                                                                                                           
                                                                                                           I don't tell you everything I'm thinking about, but most of it. I p much think of you most of the day like in school and stuff and it makes me a little upset seeing everyone have their friends and their peoples, but its ok we have time :).
                                                                                                           
                                                                                                           This is pretty much what this segment if for. I just comment on stuff to expand apon this and to see how stuff changed`)

                                                                                                        rl.question(` `, (question) => {
                                                                                                            console.log(`
                                                                                                                                     WNNNNNNW     
             WWNW       WNN K00000KN    
      WNN    K0KKN    WN K00OOOOO00     
WN  KK00K K00OO00K NN KK0OOOOOOOO00KW   
WK000OOOK KOOOOO000KK00OOOOOOOOOOOKK    
KKK0OOOOO00OOOOOOO0KK0OOOOOOOOOOOO0K W  
0KOOOOOOOOOOOOOOOOOKN 0OOOOOOOOOOOO0KN  
00OOOOOOOO0OOOOOO00KKKK0OO0OOOOOOOO00   
K0K00OOOO0  0OOOO000KOk000KKOOOOOOO00 W 
N 000OOOOOK 0OOOOO0000k0  KK0OOOOOOO0KN 
W 000OOOOOO0OOOOOOOOO00KW  00OOOOOOO0K  
N000OOOOOOOOOOOOOOOOOOKK   KKOOOOOOO00KW
WK00OOOOOOOO00OOOOOKKKK N NK00OOOOOOO0KN
 NK0000OOOO0  OOOOOK 0      00OOOOOOO00 
  N KKK00000  00000KKKN     K0OOOOOOO00K
    W       N   NNNWWW     WK00OOOOOOO00
                             00OOOOOOOK0
                             KK000000KK 
                            WN    NNNWW 
                            
                            WE WON WITHOUT A CAR WOOOOO. I told you it would happen sksks. I really enjoy playing fortnite with you win or lose. Its really funny hehe. ily.
                            
                            Love that, let's play fortnite sometime.`)
                                                                                                            rl.question(' ', (question) => {
                                                                                                                console.log(`
                             ()-()
                             ('&') 
                             c . c
                             ()=()
                             
                             I wish that bear you're holding was me :(
                                 
                            ^`)
                                                                                                                rl.question(` `, (question) => {
                                                                                                                    console.log(`
                                ___________
                                |.---------.|
                                ||         ||
                                ||         ||
                                ||         ||
                                |'---------'|
                                 ')__ ____('
                                 [=== -- o ]--.
                               __'---------'__ |
                              [::::::::::: :::] )
                               '""'"""""'""""'/T
                                          |_/
                                          
                                          Yo yo ts your birthday month today! (technically its jan 31st for me but its feb for you). Also the server is releasing tomorrow and im excited. I think you and thommo did a great job on it and im proud of you. I dont think i could do it. I hope it gets easier for you because i know you want to quit becuase you are busy and i understand that. I just hope however it goes it will make your decision more clear. <3
                                          
                                          Yea it was fun while it lasted, but in a way I am glad the server is gone.`)
                                                                                                                    rl.question(` `, (question) => {
                                                                                                                        console.log(`
  _      _                        
: ' .--.' ;              _....,_  
.'      ' .      _..--'"'       ' -._
:          :_.-'"                  .' .
:  6    6  :                     :  '.;
:          :                      ' ..';
' : .----. :'                          ;
 ' ._Y _.'               '           ;
   'U'      .'          ' .         ; 
      ' :   ;' -..___       ' .     .'' .
      _:   :  :    ' ' ' "''"'' ' .    ' .  ' .
    .'     ;..'            .'       ' .'' 
   ' .......'              ' ........-'' 
   
   I dont wish my life leading up to this point was any different whatsoever. I don't even wish I wasn't with Haylee. It was terrible and I hated it, but I wouldn't have gone to Guardian Skies. The only thing I wish I did different was I wish I would have told you how I felt about you sooner. Technically you still don't know how I feel before you read this, but it is for your birthday so I will wait. I'm sorry I waited and you had to bring it up to me but I am glad you did. Of course I do wish I was closer to you and I could see you, but I don't wish anything was different from my life except for that one thing. 
   
   Still true for the most part.`)
                                                                                                                        rl.question(' ', (answer) => {
                                                                                                                            console.log(`
       ¯|_(ツ)_/¯
       
       Heyyo I feel really bad about giving brad owner like a numpty. Im sorry I know you already dont want to do it and i didnt want to create more work. If you need help lemme know.
       
       Haha I felt really dumb.`)
                                                                                                                            rl.question(` `, (answer) => {
                                                                                                                                console.log(`
                  |
            o    ,|.
            |  ,' : ' .
            |,':,'  ,' ' .   o
            |.' . ,'      ' .|
            | ' .' .    o  ,'|
                ' .' .  |,'  |
                  ' .' .|  ,'|
                    ' . |,'
                        |
                        
            I didnt want that last one to be my addition for today because it was big sad. I wanna stay up to see you in the morning because Im at my dads, but we will see <3. ily
            
            Sleep is 4 the weak.`)
                                                                                                                                rl.question(` `, (answer) => {
                                                                                                                                    console.log(`
                  _.-=""=-._ 
                .';;-++++-//'.
               (  ||      ||  )
                './/      ;;.'
                  ''-=..=-''
                
                I had a problem with the bot and had to rollback on another update and I lost a line :(. I'll just talk about yesterday and today for today. Yesterday was the super bowl with American Football. I couldn't care less about it so I only watched the half-time show. I wish you were here to watch it with me tho. Thanks for playing Fortnizzle with me yesterday, maybe we will win today ;). I'm in school right now, so I'll write another tonight. I'm sorry I lost that line. ily.
                
                The real football ;)`)
                                                                                                                                    rl.question(` `, (answer) => {
                                                                                                                                        console.log(`
                    :) - I'm running out of ascii art
                    
                    Yo yo sop wuss good. I could talk to you all day legit. I wish I could ft you earlier cuz of school, but there is nothing i can do about that. I was thinking I don't really know what how you are feeling. I mean I do to an extent, you aren't a robot sksks. I want you to tell what is up sometime. It's ok, I mean technically I haven't told you how I feel until now when you are reading it. It's up to you tho bb dw. Im excited for you to read this. ily.
                    
                    I'm excited and scared for this one too. I want to be here when you read it this time though.`)
                                                                                                                                        rl.question(` `, (answer) => {
                                                                                                                                            console.log(`
                        ô¿ô
                        
                        Hiya! So you requested today to tell me how this all started. So it pretty much started with the first 3 line. I was stressed because of what you told me about online relationships in the past so I went here to write down my thoughts. Eventually it turned into a daily thing and I decided I was gonna tell you eventually. At first I was thinking a year, but then after realizing you weren't going to let me get you something for you birthday I just decided to give you this. That and I feel this is important to tell you. I wish I had more time with you everyday. Imy <3
                        
                        This time I just wanted you to know I care enough to make another one, but better`)
                                                                                                                                            rl.question(` `, (answer) => {
                                                                                                                                                console.log(`
                            ¸.·'¯'·.'¯'·.¸¸.·'¯'·.¸><(((º>
                                
                                Hai Soap. Enjoy ur extra sleep. I miss you tho. Your birthday is really soon. im scared sksksk. I'm sure it will be just fine, but ya know. I'm trying to save a lot of stuff for the last message it is going to be so good. I love you.
                                
                                Last message is still p lit.`)
                                                                                                                                                rl.question(` `, (answer) => {
                                                                                                                                                    console.log(`
                                    (♥_♥)
                                    
                                    yo bb. I really hope you don't get me something super expensive for my birthday. I will appreciate anything you get me no matter what. It will mean the world to me. Seriously though, food is amazing sksks. I just wanna be with you. Also I'm going to send you applesauce sometime. There is no way you never had it >:(. I read back on what you said a month ago. About how you felt about the online thingy at first. I promise I will be different Sophie. I love you and I'm not going to lose you off of that.
                                    
                                    Or or or you don't have to get me anything :)`)
                                                                                                                                                    rl.question(` `, (answer) => {
                                                                                                                                                        console.log(`
                                        龴ↀ◡ↀ龴
                                        
                                        Hi soph, just a few more days :). I know you are a bit ill I hope you feel better tomorrow and your dad as well. I wanna spend my weekend with you so I'm going to try to get up a bit earlier. I wouldn't want to spend it anyother way. I miss you. And yes I think you looks very cute with your glasses on. Not to say that you are uglee without them because that is not the case. There is just something about them i dunno. It's funny too because you normally don't wear them over your contacts. Good job on the win btw I am v proud. I will be proud no matter what. Even if it is just a fortnite game. I love you.
                                        
                                        Si`)
                                                                                                                                                        rl.question(` `, (answer) => {
                                                                                                                                                            console.log(`
                                            ✌⊂(✰‿✰)つ✌
                                            
                                            This line is being written on the same day as the last I just wanted to add that you can feel free to talk about any of these lines if you want. You don't have to, but I would prefer it. I'm down to talk about all of them. They mean a lot too me as do you.
                                            
                                            I mean same for this, but I should be here, but if not.`)
                                                                                                                                                            rl.question(` `, (answer) => {
                                                                                                                                                                console.log(`
                                                ^⨀ᴥ⨀^
                                                
                                                Hey sophie. Thank you for playing fortnite with me. I'm not going to lie, in a non-creepy way I had a dream the night before I got to see you. When you thought I looked tired I was just looking at you thinking about that. It made me a little upset yes, but it is a nice thing to think about. It gives me something to look foward to. It wont effect my feelings for you. It wont ever be too much because I really like you. Like v in to you. I don't want to lose you because of anything, but especially that. If it is meant to work out it will and when it does we have more than just a year. One year for a long time is worth it. I just think of that. I love ya (more).\
                                                
                                                This was very creepy anyway. That is like saying no-offense and insulting someone's culture or saying no-homo and sucking your man's dick.`)
                                                                                                                                                                rl.question(` `, (answer) => {
                                                                                                                                                                    console.log(`
                                                    ¸¸♬·¯·♩¸¸♪·¯·♫¸¸Happy Birthday To You¸¸♬·¯·♩¸¸♪·¯·♫¸¸
                                                    
                                                    Omg I am literally sending this to you tomorrow I am Shishter Shook. I hope that you felt you made the right decision in leaving Gravity. I hope you find the more important things easier and I will always be there to help you if you need. I will still make the bot for you and I will be co-owner for you. I will always support you no matter what. I really hope your first shift goes well tomorrow. I'm proud of you, do well for me and bring home the bread (and some sweets cuz you will be getting that mon£y). Ima go to bed. One more line, it will be good. I love you sop.
                                                    
                                                    You can get those sweets at KFC.`)
                                                                                                                                                                    rl.question(` `, (answer) => {
                                                                                                                                                                        console.log(`
                                                        [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]
                                                        
                                                        It is currently about 4 hours until your birthday so I'm going to write the last line before I ft you so here it goes I feel like it will be v thicc.
                                                        
                                                        Hiiiii, So I hoped you enjoyed this. I enjoyed writing all of it and I mean all of it. This is really important to me because you are really important to me. You shouldn't expect any of my feelings to change about you because this is me. I hope it was all you expected. I was thinking. I always tell you that I have feelings for you and that I love you, but I never really told you why. I really love your personality (hol up I know its a generic response but IM GETTING THERE [and excuse my spelling.]) I like how you are sorta "easy-going". I never mean that in a negative way I just like how I can make jokes with you and we laugh and smile together. I'm serious about you, but there is no need to be serious about everything. There really isn't much negativity either. Obviously everyone gets upset, but its not a daily thing by any means. What I mean is it isnt extreme. You are very caring, which you may disagree with, but to me you are. This morning I said I had a headache and didnt feel very well and you made sure I was ok and I really appreciate it. You are also trustworthy too and you are there for me. You are the only one I told about my great grandmother's death and what was going on up to her death and you made me feel better in a time like that. You make me happy. I also really enjoy how you involve yourself in your school productions. I feel you are very talented and it make me happy and proud that I can say that you are mine in something like that. I also love your edits i cannot edit 4 shite. You are also beautiful, but I didnt base my opinion on that much. (think of it as bonus points ;)). I also like i can play games like fortnite and stuff with you because thats what i enjoy to do and im glad i can share that opertunitiy with you. I dont really talk like that much but its the truth and I think you should know. I wish that I could spend your birthday with you and Im sorry I cant. When I see you I will make everything up dw. I really hope you have a good day and a good birthday. You are 2 years older than me now ;-; go ez on me. I love you Sophie. I'm always here if you need me and me thinks it will be that way for awhile. Let me know what you think. 🐻 
                                                        
                                                        :)`)
                                                                                                                                                                        rl.question(' ', (answer) => {
                                                                                                                                                                            console.log(`
${colors.rainbow('I hope you enjoyed')}

Final Salad:

Hardest Game to Make: Towers of Hanoi

Bonus Pictures:

Bonus Videos (Check these out):

Time Spent: 20 Hours total, 10 days

Lines: 2729

Source Code (I left comments explaining if you want to check it out): 

Final Message: Hey Soph, I really hope you enjoyed this as much as the last one. I had a lot of fun making it for you and I put a lot of effort into it. I'm sorry that it wasn't as long as the last one, but I hope I made up for it with it's interactive aspect. I wanted to make this as a gift for your exams and now for you getting a job. I'm super proud so I wanted to give back to you a little bit. My last one of these really made it hard to tell you unique stuff. I said a lot of what I wanted to say in the last one. All of it still stands and I hope you feel the same way. There is no one I would rather make this for. This time was well spent in my eyes. Even if it made you smile one time. You better know I'll be doing it again, but better. Maybe you can help me with the next one and make it one big project. That would be really cool. I can't wait to spend time with you and watch dat movie with you. I have been friccen dodging spoilers left and right at school, it's hard out there. Anyway, I hope it was what you expect, or even more. I love you I have school in the morning. Goodnight <3`)
                                                                                                                                                                        })
                                                                                                                                                                    })
                                                                                                                                                                })
                                                                                                                                                            })
                                                                                                                                                        })
                                                                                                                                                    })
                                                                                                                                                })
                                                                                                                                            })
                                                                                                                                        })
                                                                                                                                    })
                                                                                                                                })
                                                                                                                            })
                                                                                                                        })
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
//Final Message:
//Hey Soph, I really hope you enjoyed this as much as the last one. I had a lot of fun making it for you and I put a lot of effort into it. I'm sorry that it wasn't as long as the last one, but I hope I made up for it with it's interactive aspect. I wanted to make this as a gift for your exams and now for you getting a job. I'm super proud so I wanted to give back to you a little bit. My last one of these really made it hard to tell you unique stuff. I said a lot of what I wanted to say in the last one. All of it still stands and I hope you feel the same way. There is no one I would rather make this for. This time was well spent in my eyes. Even if it made you smile one time. You better know I'll be doing it again, but better. Maybe you can help me with the next one and make it one big project. That would be really cool. I can't wait to spend time with you and watch dat movie with you. I have been friccen dodging spoilers left and right at school, it's hard out there. Anyway, I hope it was what you expect, or even more. I love you I have school in the morning. Goodnight <3