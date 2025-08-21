import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface BlankPageProps {
  title: string;
  description?: string;
}

const BlankPage = ({ title, description }: BlankPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground mb-8">
              {description}
            </p>
          )}
          <p className="text-muted-foreground">
            Deze pagina wordt binnenkort toegevoegd.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlankPage;