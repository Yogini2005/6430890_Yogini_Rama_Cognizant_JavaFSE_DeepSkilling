package setting_up;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class VerifyTest {
    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Optional: stub behavior
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 2: Use the mock in the service
        MyService service = new MyService(mockApi);
        service.fetchData(); // Should trigger the call to mockApi.getData()

        // Step 3: Verify the interaction
        verify(mockApi).getData();
    }

}
