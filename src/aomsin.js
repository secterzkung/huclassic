function Aomsin(props){
	const { up,up3,down2,lottodate} = props;
    return (
    <div class="col-sm-6 col-md-6 col-lg-6 mb-2 px-1">
        <div class="bgwhitealpha shadow-sm rounded p-2 h-100 xtarget" id="government">
            <h6>
                <img src = "./images/icon/flag-aomsin.svg" alt="" class="height20" /> หวยออมสิน 
                <span class="badge badge-danger">{lottodate}</span>
            </h6>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 px-1">
                <div class="card border-light-2 text-center shadow-sm mb-2">
                    <div class="card-header blue text-white bg-header p-1">
                        รางวัลเลขท้าย 6 ตัว
                    </div>
                    <div class="card-body p-1">
                        <p class="card-text">{up} </p>
                    </div>
                </div>
                <div class="card border-light-2 text-center shadow-sm mb-2">
                    <div class="card-header blue text-white bg-header p-1">
                        <img src = "./images/icon/flag-aomsin.svg" alt="" class="height20" />
                        หวยออมสิน
                    </div>
                    <div class="card-body p-0">
                        <div class="d-flex flex-row">
                            <div class="card text-center w-50 border-card-right m-0">
                                <div class="card-header blue sub-card-header bg-transparent p-0">
                                    3 ตัวบน<br/>

                                </div>
                                <div class="card-body p-0">
                                    <p class="card-text">
                                        {up3}
                                    </p>
                                </div>
                            </div>
                            <div class="card text-center w-50 border-card-right m-0">
                                <div class="card-header blue sub-card-header bg-transparent p-0">
                                    2 ตัวล่าง<br/>

                                </div>
                                <div class="card-body p-0">
                                    <p class="card-text">
                                        {down2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Aomsin;