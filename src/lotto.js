function Lotto(props){
	const { lottosubname,lottoflag,up3,down2} = props;
    return (
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 px-1">
            <div class="card border-light-2 text-center shadow-sm mb-2">
                <div class="card-header blue text-white bg-header p-1">
                    <table class="width100">
                        <tr>
                            <th class="center25"><img src = {lottoflag} alt="" class="height20" /></th>
                            <th class="centertb">{lottosubname}</th>
                            <th class="center25"></th>
                        </tr>
                    </table>
                </div>
                <div class="card-body p-0">
                    <div class="d-flex flex-row">
                        <div class="card text-center w-50 border-card-right m-0">
                            <div class="card-header sub-card-header bg-transparent p-0">3 ตัวบน<br/></div>
                            <div class="card-body p-0">
                                <p class="card-text">{up3}</p>
                            </div>
                        </div>
                        <div class="card text-center w-50 border-card-right m-0">
                            <div class="card-header sub-card-header bg-transparent p-0">2 ตัวล่าง<br/></div>
                            <div class="card-body p-0">
                                <p class="card-text">{down2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Lotto;