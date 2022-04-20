import Login from "./login"

import {screen,render,fireEvent} from "@testing-library/react"

test('testing the click function',()=>{
    const Handleclick = jest.fn()
    
    const {container} = render(<Login onClick={Handleclick} >{"my_button"}</Login>)
    expect(container).toMatchSnapshot()

    fireEvent.click(screen.getByText('my_button'))

    expect(Handleclick).toHaveBeenCalledTimes(1)
})