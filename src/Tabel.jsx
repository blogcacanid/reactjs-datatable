import React, { Component } from 'react'

const $ = require('jquery')
$.Datatable = require('datatables.net')

export default class Tabel extends Component {

    componentDidMount() {
        console.log(this.el);
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    {title:"NIP"},
                    {title:"Nama Pegawai"},
                    {title:"Alamat"},
                ]
            }
        )
    }

    componentWillMount() {

    }

    render() {
        return <div>
            <table className="display" style={{ textAlign: "left" }} width="100%" ref={el => this.el = el} >
            </table>
        </div>
    }

}
