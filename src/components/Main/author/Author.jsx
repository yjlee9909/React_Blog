import "./author.css";

export default function Author({ userName, profileImg, created }) {
    return (
        <dl class="author-wrap">
            <dt class="a11y-hidden">Author</dt>
            <dd class="author">
                <img src="https://cdn.pixabay.com/photo/2022/11/17/14/00/astrology-7598174_960_720.png?raw=true" alt="" /> {userName}
            </dd>
            <dt class="a11y-hidden">Created</dt>
            <dd class="created">{created}</dd>
        </dl>
    );
}
