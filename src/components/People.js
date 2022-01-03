import React from "react";

export default function People({data, loading}){
    return (
        <>
            <p>People</p>
            {
          loading
          ?
          (
          <h1 className="alert alert-info text-center">
               Loading
          </h1>
          )
          :
          (
            <div className="row">
                    {data.map((people, i) => {
                        return (
                            <div className="col-sm-3">
                                {people.name}
                                {people.height}
                            </div>
                        )
                    })}
            </div>
        
                )
            }
        </>
    )
}