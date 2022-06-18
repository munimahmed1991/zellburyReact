import React from "react"
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import Spinner from './Spinner';
// const url = 'https://mocki.io/v1/76c0b88e-0d4a-44d5-8a86-a871b09bab8e';



function Summary() {

    // fetching data of box
    // const [details, setDetails] = useState(null);
    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setDetails(response.data)
    //         // console.log(response);
    //     })
    // }, [])

    // if (!details) return null
    return (
        <>


            <div className="contain">
                <div className='myTbl'>


                    <h3 className="page-title mar">Summary</h3>
                    <hr className="mx-1" />

                    <div className="row">
                        <div className="col-md-8 col-sm-12" >
                            <table className='tbl-category table table-hover display nowrap' width="100%">
                                <thead >
                                    <tr className="bg-inverse" style={{ fontWeight: 800 }}>
                                        <th className="bb-2 bg-inverse text-center ">Description</th>
                                        <th className="bb-2 bg-inverse text-center mg">Gross Sale	</th>
                                        <th className="bb-2 bg-inverse text-center mg">Net Sale</th>
                                        <th className="bb-2 bg-inverse text-center mg">Qty</th>
                                        <th className="bb-2 bg-inverse text-center mg">Discount</th>
                                        <th className="bb-2 bg-inverse text-center mg">Sales Return</th>
                                        <th className="bb-2 bg-inverse text-center mg">Total Bills</th>
                                        <th className="bb-2 bg-inverse text-center mg">Average Bill	</th>
                                        <th className="bb-2 bg-inverse text-center mg">GP Margin</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr>
                                        <td>{(12345689).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                    </tr>
                                    <tr>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>{(12345689).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                    </tr>
                                    <tr>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                    </tr>
                                    <tr>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                    </tr>




                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Summary