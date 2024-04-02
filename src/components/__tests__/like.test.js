import { render,screen,fireEvent } from "@testing-library/react";
import Like from "../like";

test("Likes in 0 by default",()=>{
    render(<Like/>);
    const lik = screen.getByTestId("lik");
    expect(lik.innerHTML).toBe("Likes: 0")
});

test("Like increment on click in button like",()=>{
    render(<Like/>);
    const bl= screen.getByTestId("bl")
    fireEvent.click(bl);
    const lik = screen.getByTestId("lik");
    expect(lik.innerHTML).toBe("Likes: 1");
});

test("Dislike decrement on click in button dislike",()=>{
    render(<Like/>);
    const dsl= screen.getByTestId("dsl")
    fireEvent.click(dsl);
    const lik = screen.getByTestId("lik");
    expect(lik.innerHTML).toBe("Likes: -1");
});