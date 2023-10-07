import React from 'react'

const DelModal = ({ prod, handeyeClickOfTrash }) => {
    return (
        <div className="modal fade" id={`delModal${prod.id}`} tabindex="-1" aria-labelledby={`delModal${prod.id}Label`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={`delModal${prod.id}Label`}>Delete Prodcut</h1>
                        <button type="button" style={{ background: "transparent var(--bs-btn-close-bg) center/1em auto no-repeat" }} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are You Sure to delete {prod.name}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={() => {
                                handeyeClickOfTrash()
                            }}
                        >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DelModal