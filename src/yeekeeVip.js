function YeekeeVIP(props){
	const { round, up, down,yeekeedate} = props;
    return (
			<div class="col-sm-12 col-md-6 col-lg-6 mb-2 px-1">
				<div class="bgwhitealpha blue shadow-sm rounded p-2 h-100">
					<h6 class="text-white">
						<img src = "./images/icon/flag-yeekee.svg" alt="" class="height20" /> 
						จับยี่กี VIP - รอบที่ {round}
						<span class="badge badge-danger">{yeekeedate}</span>
					</h6>
					<div class="row">
						<div class="col pr-1">
							<div class="card text-center border-0">
								<div class="card-header blue bg-blue text-white p-1">
									3ตัวบน<br />
								</div>
								<div class="card-body p-1">
                                    <p class="card-text font-weight-bold">{up}</p>
                                </div>
							</div>
						</div>
						<div class="col pl-1">
							<div class="card text-center border-0">
								<div class="card-header blue bg-blue text-white p-1">2ตัวล่าง<br /></div>
								<div class="card-body p-1">
									<p class="card-text font-weight-bold">{down}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
}
export default YeekeeVIP;