package careernavigator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")
public class StudentProfileController {

    @Autowired
    private StudentProfileRepository studentProfileRepository;

    @GetMapping
    public List<StudentProfile> getAllProfiles() {
        return studentProfileRepository.findAll();
    }

    @PostMapping
    public StudentProfile saveProfile(@RequestBody StudentProfile profile) {
        return studentProfileRepository.save(profile);
    }

    @DeleteMapping("/{id}")
    public void deleteProfile(@PathVariable Long id) {
        studentProfileRepository.deleteById(id);
    }
}