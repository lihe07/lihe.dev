import bg from '../../assets/bg.jpg'

export default () => {
  return (
    <section
      class="h-screen w-full bg-center bg-cover"
      style={{ 'background-image': `url(${bg})` }}
    >
      <div class="h-full w-full backdrop-blur bg-black bg-op-50 flex items-center px-10 box-border">
        <div class="max-w-300 ma w-full">
          <p class="font-sans op-60 text-7 mt0 mb-5">Hello!!</p>
          <p class="font-serif text-13 mt0">
            I'm He Li, a student and <br />
            Open Source + AI fan
          </p>

          <div class="flex">
            <button>Read More</button>
            <span>Or</span>
            <button>Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}
