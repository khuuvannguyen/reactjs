var root = document.getElementById("root");

function Person(props) {
    return (
        <div class="text">
            <h1>hello {props.name}</h1>
            <h1>age: {props.age}</h1>
        </div>
    );
}

var element = (
    <div>
        <Person name="a" age="2" />
        <Person name="b" age="3" />
        <Person name="c" age="4" />
    </div>
);

ReactDOM.render(element, root);
