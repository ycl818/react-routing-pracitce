import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

const ModalPage = () => {

	const [showModal, setShowModal] = useState(false)

	const handleClick = () => {
		setShowModal(true)
	}

	const handleClose = () => {
		setShowModal(false)
	}
	const actionBar = (
		<div>
			<Button onClick={handleClose} primary>I accept</Button>
		</div>
	)

	const modal = <Modal onClose={handleClose} actionBar={actionBar}>
		<p>
			Here is an important agreement for you to accept
		</p>
	</Modal>

  return (
    <div>
		
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p><p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ipsum leo, non bibendum ante scelerisque et. Praesent enim felis, luctus quis est vel, varius fringilla urna. Vivamus tortor libero, maximus ac tempus sit amet, fermentum eget nibh. Nam elementum euismod commodo. Nullam id nisl volutpat, gravida metus sit amet, sodales lacus. Sed viverra enim non nisl consequat, vitae laoreet lorem porttitor. Mauris posuere, libero id volutpat malesuada, erat odio blandit nibh, ultrices porta risus erat ut augue. Duis vestibulum bibendum justo at vestibulum.

Integer ac tempus metus. Praesent lobortis, lorem at vulputate luctus, risus massa dapibus sapien, quis fermentum lectus elit non sem. Nam eu massa bibendum, cursus nisl venenatis, malesuada ex. Donec metus lorem, commodo quis bibendum sit amet, ultricies a diam. Nulla id erat ut dolor rutrum vehicula. Etiam et diam sollicitudin, sodales orci quis, faucibus nisl. Ut varius lectus sed enim interdum gravida. Ut eu tristique elit. Donec convallis ornare libero, in sodales purus tempus nec. Nulla eu molestie tortor. Ut et leo non arcu posuere fringilla vel id ex. Phasellus maximus sem non viverra consequat. Proin a mollis ante.
			</p>
			<Button primary onClick={handleClick}>Open Modal</Button>
			{showModal && modal}
    </div>
	
  )
}

export default ModalPage