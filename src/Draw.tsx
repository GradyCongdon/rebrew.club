import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface DrawProps {
    start: any;
    back: any;
}

const WIDTH = 375;
const CX = 320;
const CY = 320;
const C_MARGIN_TOP = 150;
const CT = CY + C_MARGIN_TOP;
const BUTTON_WIDTH = 10;
const BUTTON_TOP_MARGIN = 30;
const BUTTON_TOP = CT + BUTTON_TOP_MARGIN;
const BUTTON_LEFT = (WIDTH - CX) / 2;

let p6: any;

export const Draw: React.FC<DrawProps> = (props: DrawProps) => {

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p6 = p5;
        const canvas = p5.createCanvas(CX, CY).parent(canvasParentRef);
        p5.frameRate(120);
        p5.strokeWeight(5);
        p5.stroke('#26906D');

        p5.clear();

        const clear = p5.createButton('clear');
        clear.position(CX - BUTTON_WIDTH, BUTTON_TOP);
        clear.mousePressed(() => p6.clear());

        const back = p5.createButton('back');
        back.position(BUTTON_LEFT, BUTTON_TOP);
        back.mousePressed(props.back);

        props.start()
    };


    const draw = (p5: p5Types) => {
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    };

    return (
        <>
            <Sketch setup={setup} draw={draw} />
            <p className="subject">Draw an apple</p>
        </>
    );
}