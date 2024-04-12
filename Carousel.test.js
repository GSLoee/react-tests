import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";




it('should render Carousel', function() {
  render(
  <Carousel 
    photos={TEST_IMAGES}
    title='smoke test'/>)
})

// it('should match snapshot', ()=>{
//   const {asFragment} = render(
//                         <Carousel
//                         photos={TEST_IMAGES}
//                         title='snapshot test'
//                         />
//   );
//   expect(asFragment()).toMatchSnapshot()
// })


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it('works when you clikc on the left arrow', function () {
  const { container } = render(
    <Carousel 
      photos={TEST_IMAGES}
      title='images for testing'
    />
  )
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  const leftArrow = container.querySelector('.bi-arrow-left-circle');
  fireEvent.click(leftArrow)

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("doesn't have left arrow on first image", function(){
  const { container } = render(
    <Carousel 
      photos={TEST_IMAGES}
      title='images for testing'
    />
  )
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).toBeInTheDocument();
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).not.toBeInTheDocument();

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();  

  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('.bi-arrow-left-circle')
  ).toBeInTheDocument();
})

