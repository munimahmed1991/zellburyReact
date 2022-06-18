import React from 'react'

function Description() {
    return (
        <>
            <h4 className='mt-4'>Location Summary</h4>


            <div className='myTbl'>
                <hr className="mx-1" />

                <div className="row">
                    <div className="col-md-12 col-sm-12" >
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
                            <tbody className='fix'>
                                <tr>
                                    <td>QTA-GOLD CITY MALL FIRST FLOOR </td>
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
                                    <td>12345689</td>
                                    <td>{(12345689).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
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

        </>
    )
}

export default Description