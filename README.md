# IEEE TEMS SRM Student Chapter Portal

The official web portal for the **IEEE Technology and Engineering Management Society (TEMS)** Student Chapter at SRM Institute of Science and Technology. This platform serves as a hub for our events, technical projects, team information, and student engagement.


## 🚀 Features

- **Dynamic Event Showcase**: Browse upcoming and past events like *Pitch Perfect 2.0* and *Pitch Roulette*.
- **Project Portfolio**: valid showcases of our technical contributions and research.
- **Team Directory**: Meet the core team and leads behind the chapter.
- **AI Companion**: An integrated AI chatbot (powered by Google Gemini) to answer queries about the chapter, events, and management.
- **Modern UI/UX**: Built with a "Science Fiction" aesthetic using glassmorphism, smooth animations (Framer Motion), and responsive design.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/)
- **Language**: TypeScript

## 📦 Installation & Local Development

1.  **Clone the repository**
    ```bash
    git clone https://github.com/ShinobiWonKnobi/IEEETEMS-Official.git
    cd IEEETEMS-Official
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env.local` file in the root directory and add your Google Gemini API key:
    ```bash
    GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 🚀 Deployment (Vercel)

This project is optimized for deployment on Vercel.

1.  Import the repository into Vercel.
2.  In the Project Settings > **Environment Variables**, add:
    *   **Key**: `GEMINI_API_KEY`
    *   **Value**: `your_actual_gemini_api_key`
3.  Deploy!

> **Note**: The API key is securely baked into the client-side bundle during the build process via `vite.config.ts`.

## 🤝 Contributing

We welcome contributions from the community!

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes (`git commit -m 'Add some NewFeature'`).
4.  Push to the branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
