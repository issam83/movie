import React, { Component } from 'react'

export default class FormEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        const url = " http://92.175.11.66:3001/api/quests/movies/";

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Film ajouté`);
                }
            }).catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout de votre film`);
            });
        (e).preventDefault();
    }

    render() {
        return (
            <div>
                <div className="FormEmployee">


                    <form onSubmit={this.submitForm}>
                        <fieldset>
                            <legend>Informations</legend>
                            <div className="form-data">
                                <label htmlFor="name">Movie</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                />
                            </div>

                            <div className="form-data">
                                <label htmlFor="poster">URL Movie</label>
                                <input
                                    type="text"
                                    id="poster"
                                    name="poster"
                                    onChange={this.onChange}
                                    value={this.state.poster}
                                />
                            </div>

                            <div className="form-data">
                                <label htmlFor="comment">Comments</label>
                                <input
                                    type="text"
                                    id="comment"
                                    name="comment"
                                    onChange={this.onChange}
                                    value={this.state.comment}
                                />
                            </div>
                            <hr />
                            <div className="form-data">
                                <input type="submit" value="Submit" />
                            </div>
                        </fieldset>
                    </form>
                </div>

            </div>
        )
    }
}
