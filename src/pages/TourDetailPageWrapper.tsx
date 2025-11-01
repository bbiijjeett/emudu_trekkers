import { useParams, useNavigate, Link } from 'react-router-dom';
import { TourDetailsPage } from '../components/TourDetailsPage';
import { toursData } from '../components/tour-data';

export function TourDetailPageWrapper() {
  const { tourSlug } = useParams<{ tourSlug: string }>();
  const navigate = useNavigate();

  // Find the tour by converting the slug back to a title
  const tour = toursData.find(t => 
    t.title.toLowerCase().replace(/\s+/g, '-') === tourSlug
  );

  if (!tour) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--forest-green)' }}>
            Tour Not Found
          </h1>
          <p className="mb-6 opacity-70">The tour you're looking for doesn't exist.</p>
          <Link to="/tours">
            <button
              className="px-6 py-3 rounded-full text-white"
              style={{ backgroundColor: 'var(--forest-green)' }}
            >
              View All Tours
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return <TourDetailsPage tour={tour} />;
}
