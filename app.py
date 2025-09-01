from flask import Flask, render_template, url_for, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST": # если пользователь ввел имя и нажал кнопку отправить
        name = request.form["username"] # возьмем текст из формы который он отправил
        return f"Привет {name}!"
    
    # иначе покажем ему форму
    return """
        <form action="/" method="post">
            <p>
	            <label for="username">Username</label>
	            <input type="text" name="username">
	        </p>
	    	<p>
	            <input type="submit" value="Отправить">
	        </p>
        </form>
        """


if __name__ == '__main__':
     app.run(debug=True)