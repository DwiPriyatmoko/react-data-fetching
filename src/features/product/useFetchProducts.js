import { axiosInstance } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

// This is a react hook, not components
export const useFetchProducts = () => {
	return useQuery({
		queryFn: async () => {
			const productResponse = await axiosInstance.get('/products');

			return productResponse;
		},
	});
};
