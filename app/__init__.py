import os
from argparse import ArgumentParser
from flask import Flask, render_template
from flask import Flask, render_template, request, jsonify, abort


def create_app(test_config=None):
    """create and configure the app"""
    app = Flask(__name__, instance_relative_config=True)
    app.secret_key = os.urandom(12)  # Generic key for dev purposes only

    # ======== Routing ============================= #
    # -------- Home -------------------------------- #
    @app.route('/', methods=['GET'])
    def index():
        return render_template('layouts/index.html')

    @app.route('/api/v1/ocr', methods=['POST'])
    def get_text():
        if request.json:
            # Image data
            data = request.json['data']
            # TODO: Save data to filepath
            # TODO: Create Tempfile
            # TODO: Use OCR To Extract Text

            # Return OCR Text
            text = "This is the default text.\nTODO in file ./app/__init__.py"

            return jsonify(
                text=text,
            )
        else:
            abort(400)
    
    @app.route('/api/v1/text', methods=['POST'])
    def save_target():
        return jsonify(
            message="text has been saved"
        )


    return app


# ======== Main ============================================================== #
if __name__ == '__main__':
    parser = ArgumentParser(description='Text Correction Toolkit')
    parser.add_argument("-p", "--port", type=int,
                        metavar="PORT", dest="port", default=5000, help='Port number')
    parser.add_argument("--host", type=str, metavar="HOST",
                        dest="host", default="127.0.0.1")
    args = parser.parse_args()

    # Init Flask App
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "PlaceYourSectretKeyHere"
    app.run(host=args.host, port=args.port, debug=True)
