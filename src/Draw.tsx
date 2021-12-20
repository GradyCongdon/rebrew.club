import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface DrawProps {
    start: any;
    back: any;
    id: string;
    label: string;
    isDone: boolean;
}

const WIDTH = 375;
const CX = 340;
const CY = 315;
const C_MARGIN_TOP = 100;
const CT = CY + C_MARGIN_TOP;
const BUTTON_WIDTH = 10;
const BUTTON_TOP_MARGIN = 30;
const BUTTON_TOP = CT + BUTTON_TOP_MARGIN;
const BUTTON_LEFT = (WIDTH - CX);

let p6: any;

export const Draw: React.FC<DrawProps> = (props: DrawProps) => {
    const { id, label } = props;
    const filename = `${label}.png`;

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p6 = p5;
        const canvas = p5.createCanvas(CX, CY).parent(canvasParentRef);
        p5.frameRate(120);
        p5.strokeWeight(5);
        p5.stroke('#26906D');

        p5.clear();

        const clear = p5.createButton('clear');
        clear.parent(canvasParentRef);
        clear.position(CX - BUTTON_WIDTH, BUTTON_TOP);
        clear.mousePressed(() => p5.clear());

        const back = p5.createButton('back');
        back.parent(canvasParentRef);
        back.position(CX - BUTTON_WIDTH, BUTTON_TOP + 90);
        back.mousePressed(() => props.back());

        const save = p5.createButton('save');
        save.parent(canvasParentRef);
        save.position(BUTTON_LEFT, BUTTON_TOP);
        save.mousePressed(() => {
            const image = p5.save(canvas, filename);
            console.log(image);
            props.back();
        });

        props.start()
    };

    const mouseDragged = (p5: p5Types) => {
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }

    const touchMoved = (p5: p5Types) => {
        p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }


    return (
        <>
            <Sketch setup={setup} touchMoved={touchMoved} mouseDragged={mouseDragged} />
            <p className="subject">Draw {label}</p>
        </>
    );
}