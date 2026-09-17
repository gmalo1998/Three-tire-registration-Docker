import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { api } from '../lib/api';

function StudentRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    class: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.age ||
      !formData.class.trim()
    ) {
      toast.error('Please complete all the fields');
      return;
    }

    try {
      setLoading(true);

      await api.createStudent({
        name: formData.name.trim(),
        age: parseInt(formData.age),
        class: formData.class.trim(),
      });

      toast.success('Student registered successfully!');
      navigate('/list');
    } catch (error) {
      console.error('Error registering student:', error);
      toast.error('Failed to register student');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        relative
        min-h-screen
        w-screen
        overflow-hidden
        bg-violet-700
        left-1/2
        -translate-x-1/2
      "
    >
      {/* =====================================================
          FULL PAGE BLUE BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-violet-700
          via-violet-600
          to-violet-800
        "
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top left glow */}

      <div
        className="
          absolute
          -left-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-violet-700
          blur-[120px]
          opacity-30
        "
      />

      {/* Bottom right glow */}

      <div
        className="
          absolute
          -bottom-40
          -right-40
          h-96
          w-96
          rounded-full
          bg-violet-700
          blur-[120px]
          opacity-50
        "
      />

      {/* Center glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          blur-[160px]
          opacity-10
        "
      />

      {/* Decorative circles */}

      <div
        className="
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-10
          h-96
          w-96
          rounded-full
          border
          border-white/10
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          px-4
          py-10
        "
      >
        <div className="w-full max-w-5xl">

          {/* =================================================
              REGISTRATION CARD
          ================================================= */}

          <div
            className="
              grid
              overflow-hidden
              rounded-3xl
              border
              border-white/30
              bg-white
              shadow-2xl
              md:grid-cols-2
            "
          >

            {/* =================================================
                LEFT BLUE PANEL
            ================================================= */}

            <div
              className="
                relative
                hidden
                overflow-hidden
                bg-gradient-to-br
                from-violet-500
                via-violet-600
                to-violet-800
                p-12
                text-white
                md:flex
                md:flex-col
                md:justify-between
              "
            >

              {/* Decorative circles */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-60
                  w-60
                  rounded-full
                  border
                  border-white/20
                "
              />

              <div
                className="
                  absolute
                  -bottom-24
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  border
                  border-white/10
                "
              />

              <div
                className="
                  absolute
                  right-10
                  top-1/2
                  h-32
                  w-32
                  rounded-full
                  bg-white/5
                "
              />

              {/* Content */}

              <div className="relative">

                {/* Logo */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    text-3xl
                    text-blue-700
                    shadow-xl
                  "
                >
                  🎓
                </div>

                <h1
                  className="
                    mt-8
                    text-4xl
                    font-bold
                    leading-tight
                  "
                >
                  Build Your
                  <br />
                  Student Community
                </h1>

                <p
                  className="
                    mt-5
                    max-w-sm
                    text-base
                    leading-7
                    text-blue-100
                  "
                >
                  Register students quickly and keep all academic
                  information organized in one simple platform.
                </p>

              </div>

              {/* Features */}

              <div className="relative space-y-5">

                {/* Simple Registration */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      font-bold
                      text-blue-700
                      shadow-sm
                    "
                  >
                    ✓
                  </div>

                  <div>
                    <p className="font-semibold">
                      Simple Registration
                    </p>

                    <p className="text-xs text-blue-100">
                      Add students in seconds
                    </p>
                  </div>

                </div>

                {/* Secure Information */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-blue-700
                      shadow-sm
                    "
                  >
                    🔒
                  </div>

                  <div>
                    <p className="font-semibold">
                      Secure Information
                    </p>

                    <p className="text-xs text-blue-100">
                      Keep student data protected
                    </p>
                  </div>

                </div>

                {/* Fast & Responsive */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-blue-700
                      shadow-sm
                    "
                  >
                    ⚡
                  </div>

                  <div>
                    <p className="font-semibold">
                      Fast & Responsive
                    </p>

                    <p className="text-xs text-blue-100">
                      Works beautifully on every device
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT WHITE FORM
            ================================================= */}

            <div className="bg-white p-7 sm:p-10 md:p-12">

              {/* Header */}

              <div className="mb-8">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-semibold text-blue-600">
                      STUDENT PORTAL
                    </p>

                    <h2
                      className="
                        mt-2
                        text-3xl
                        font-bold
                        text-slate-900
                      "
                    >
                      Register Student
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Enter the student's details below.
                    </p>

                  </div>

                  {/* Mobile Logo */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-violet-700
                      text-2xl
                      text-blue-600
                      md:hidden
                    "
                  >
                    🎓
                  </div>

                </div>

                {/* Progress */}

                <div className="mt-7">

                  <div className="mb-2 flex justify-between text-xs">

                    <span className="font-medium text-slate-600">
                      Registration
                    </span>

                    <span className="text-slate-400">
                      3 fields
                    </span>

                  </div>

                  <div
                    className="
                      h-1.5
                      overflow-hidden
                      rounded-full
                      bg-violet-700
                    "
                  >
                    <div
                      className="
                        h-full
                        w-1/3
                        rounded-full
                        bg-violet-700
                      "
                    />
                  </div>

                </div>

              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* =================================================
                    NAME
                ================================================= */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Full Name
                  </label>

                  <div className="group relative">

                    <div
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition
                        group-focus-within:text-blue-600
                      "
                    >

                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
                        />
                      </svg>

                    </div>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3.5
                        pl-12
                        pr-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition-all
                        duration-200
                        placeholder:text-slate-400
                        hover:border-blue-300
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />

                  </div>

                </div>

                {/* =================================================
                    AGE
                ================================================= */}

                <div>

                  <label
                    htmlFor="age"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Age
                  </label>

                  <div className="group relative">

                    <div
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition
                        group-focus-within:text-blue-600
                      "
                    >

                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l2.5 2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                    </div>

                    <input
                      type="number"
                      name="age"
                      id="age"
                      required
                      min="1"
                      max="100"
                      placeholder="Enter age"
                      value={formData.age}
                      onChange={handleChange}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3.5
                        pl-12
                        pr-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition-all
                        duration-200
                        placeholder:text-slate-400
                        hover:border-blue-300
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />

                  </div>

                </div>

                {/* =================================================
                    CLASS
                ================================================= */}

                <div>

                  <label
                    htmlFor="class"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Class
                  </label>

                  <div className="group relative">

                    <div
                      className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        transition
                        group-focus-within:text-blue-600
                      "
                    >

                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 6.75h15M4.5 12h15M4.5 17.25h15"
                        />
                      </svg>

                    </div>

                    <input
                      type="text"
                      name="class"
                      id="class"
                      required
                      placeholder="Example: Class 10"
                      value={formData.class}
                      onChange={handleChange}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3.5
                        pl-12
                        pr-4
                        text-sm
                        text-slate-900
                        outline-none
                        transition-all
                        duration-200
                        placeholder:text-slate-400
                        hover:border-blue-300
                        focus:border-blue-500
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-500/10
                      "
                    />

                  </div>

                </div>

                {/* =================================================
                    REGISTER BUTTON
                ================================================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    w-full
                    rounded-xl
                    bg-violet-700
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-violet-400/20
                    transition-all
                    duration-300
                    hover:bg-violet-600
                    hover:shadow-xl
                    hover:shadow-violet-500/30
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >

                  {loading ? (
                    <span className="flex items-center justify-center gap-2">

                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="opacity-30"
                        />

                        <path
                          d="M21 12a9 9 0 00-9-9"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>

                      Registering Student...

                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">

                      Register Student

                      <svg
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 6l6 6-6 6"
                        />
                      </svg>

                    </span>
                  )}

                </button>

                {/* =================================================
                    BACK
                ================================================= */}

                <button
                  type="button"
                  onClick={() => navigate('/list')}
                  className="
                    w-full
                    py-3
                    text-sm
                    font-medium
                    text-slate-500
                    transition-colors
                    duration-200
                    hover:text-violet-700
                  "
                >
                  ← View Student List
                </button>

              </form>

              {/* =================================================
                  FOOTER
              ================================================= */}

              <div className="mt-7 border-t border-slate-100 pt-6">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-xs
                    text-slate-400
                  "
                >

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
                    />
                  </svg>

                  Your information is securely stored

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;