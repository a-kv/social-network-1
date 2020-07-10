import React from 'react';
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="test"/>);
        const instance = component.getInstance(); //дай мне конкретный экземпляр объекта
        expect(instance.state.status).toBe("test");
    });

    test("after creation span should be displayed ", () => {
        const component = create(<ProfileStatus status="test"/>);
        const testRoot = component.root; //дай мне конкретный экземпляр объекта
        let span = testRoot.findByType('span');
        expect(span.length).not.toBeNull();
    });
    test("after creation input shouldn't be displayed ", () => {
        const component = create(<ProfileStatus status="test"/>);
        const testRoot = component.root; //дай мне конкретный экземпляр объекта
        expect(() => {
            let input = testRoot.findByType('input');
        }).toThrow();
    });

    test("after creation span with status should be displayed ", () => {
        const component = create(<ProfileStatus status="test"/>);
        const testRoot = component.root; //дай мне конкретный экземпляр объекта
        let span = testRoot.findByType('span');
        expect(span.children[0]).toBe('test');
    });
    test("input should be displayed in editMode instead of span ", () => {
        const component = create(<ProfileStatus status="test"/>);
        const testRoot = component.root; //дай мне конкретный экземпляр объекта
        let span = testRoot.findByType('span');
        span.props.onDoubleClick();
        let input = testRoot.findByType('input');
        expect(input.props.value).toBe('test');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn(); // принудительно вызываем callback
        const component = create(<ProfileStatus status="test" updateStatus={mockCallback}/>); // передаем в пропсы
        let instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1); // проверяем сколько раз вызывается callback
    });
});