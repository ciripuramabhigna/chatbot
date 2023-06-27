function getBotResponse(input) {
    
    if (input == "hi") {
        return "welcome to IARE";
    } else if (input == "about IARE") {
        return "iare";
    } else if (input == "area") {
        return "Dundigal,Hyderabad";
    } else if (input == "departments") {
        return "cse,it,ece,eee,mech,aero";
    } else if (input == "cse") {
        return "csit,csml,csai";
    } else if (input == "it") {
        return "Animation,Web designing,Digital marketing, Graphic designing";  
    } else if (input == "Animation") {
        return "Traditional animation,2D Animation,3D Animation";
    }   

    
    if (input == "hello") {
        return "Hello there!"
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
