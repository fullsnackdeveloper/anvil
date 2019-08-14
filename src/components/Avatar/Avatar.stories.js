import {storiesOf} from "@storybook/react";
import React from "react";
import Avatar from "./";

storiesOf("Avatar", module).add("default", () => (
    <div>
        <div className="story-spacer">
            <Avatar
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
    </div>
)).add("shape", () => (
    <div>
        <div className="story-spacer">
            <Avatar
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
        <div className="story-spacer">
            <Avatar
                shape="circle"
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
    </div>
)).add("size", () => (
    <div>
        <div className="story-spacer">
            <Avatar
                size="small"
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
        <div className="story-spacer">
            <Avatar
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
        <div className="story-spacer">
            <Avatar
                size="large"
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
        <div className="story-spacer">
            <Avatar
                size="small"
                shape="circle"
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
        <div className="story-spacer">
            <Avatar
                shape="circle"
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
        <div className="story-spacer">
            <Avatar
                size="large"
                shape="circle"
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
    </div>
)).add("bordered", () => (
    <div style={{
        background: '#303030',
        padding: '5px 0'
    }}>
        <div className="story-spacer">
            <Avatar
                bordered
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
        <div className="story-spacer">
            <Avatar
                bordered
                shape="circle"
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
    </div>
)).add("raised", () => (
    <div>
        <div className="story-spacer">
            <Avatar
                raised
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
        <div className="story-spacer">
            <Avatar
                raised
                shape="circle"
                image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
        </div>
    </div>
))