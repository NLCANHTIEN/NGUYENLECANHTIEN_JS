import React from 'react'

export default function TopNav() {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
	<div className="topNav">
		<div class="container">
			<div class="alignR">
				<div class="pull-left socialNw">
					<a href="#st"><span className="icon-twitter"></span></a>
					<a href="#st"><span className="icon-facebook"></span></a>
					<a href="#st"><span className="icon-youtube"></span></a>
					<a href="#st"><span className="icon-tumblr"></span></a>
				</div>
				<a href="index.html"> <span className="icon-home"></span> Home</a> 
				<a href="#st"><span className="icon-user"></span> My Account</a> 
				<a href="register.html"><span className="icon-edit"></span> Free Register </a> 
				<a href="contact.html"><span className="icon-envelope"></span> Contact us</a>
				<a href="cart.htm
l"><span class="icon-shopping-cart"></span> 2 Item(s) - <span className="badge badge-warning"> $448.42</span></a>
			</div>
		</div>
	</div>
</div>
  )
}
