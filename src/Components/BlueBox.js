
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "./Loader";
const url = 'https://mocki.io/v1/e49c833c-e403-4e34-ae85-9a025c9ae4d2';
function BlueBox(props) {
    // fetching data of box
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true)
        axios.get(url).then((response) => {
            setDetails(response.data)
            // console.log(response);
            setLoading(false)
        })
    }, [])


    if (!details) return null
    return (
        <>

            {loading ? <Loader /> :
                details && details.map(details => {
                    return (

                        <div className="col-xl-4 col-12" key={details.id}>

                            <div className="small-box box-info bg-info" data-overlay={5}>
                                <div className="inner">
                                    <h3 style={{ fontSize: '2em', fontFamily: 'calibri', textDecoration: 'underline' }}>Today Sale</h3>
                                    <h3 className="bottt">   <label style={{ fontFamily: 'calibri' }} />{(details.todaySale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
                                </div>
                                <div className="p-15">
                                    <div className="font-size-16 flexbox align-items-center">
                                        <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold"> Retail</label></span>
                                        <span className="font-weight-bold"> <label id="tdySalesRtAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(details.retail).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="font-size-16 flexbox align-items-center" style={{ marginTop: '3%' }}>
                                        <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold">Online</label></span>
                                        <span className="font-weight-bold"> <label id="tdySalesOnlAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(details.retail).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                    </div>
                                    <div className="font-size-16 flexbox align-items-center" style={{ marginTop: '3%' }}>
                                        <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold">Wholesale</label></span>
                                        <span className="font-weight-bold"> <label id="tdySalesWsAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(details.retail).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                    </div>
                                </div>
                                <div className="icon text-white">
                                    <i className="fa fa-bar-chart" />
                                </div>
                                <a href="#" className="small-box-footer">More info<i className="fa fa-arrow-right" /></a>
                            </div>
                        </div>
                    )
                })}

        </>
    )
}

export default BlueBox