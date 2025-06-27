package setting_up;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TeardownMethodTest {
	private TeardownMethod calculator;

    @BeforeEach
    public void setUp() {
        calculator = new TeardownMethod();
        System.out.println("Setup completed.");
    }

    @AfterEach
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown completed.");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 10;
        int b = 5;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10;
        int b = 4;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }

}
